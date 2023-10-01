import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
const router = express.Router();
const jsonParser = bodyParser.json();
import {USERS_JSON_FILE, WORDS_JSON_FILE} from './constants/constants';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import {IAuth, IUserData, IWord, IWords} from './types';

let users: IAuth[] = [];
let words: IWord[] = [];

if (fs.existsSync(USERS_JSON_FILE)) {
  const userData = fs.readFileSync(USERS_JSON_FILE, 'utf8');
  const parsedUserData: IUserData = JSON.parse(userData);
  users = parsedUserData.users;
}

if (fs.existsSync(USERS_JSON_FILE)) {
  const wordsData = fs.readFileSync(WORDS_JSON_FILE, 'utf8');
  const parsedUserData: IWords = JSON.parse(wordsData);
  words = parsedUserData.words;
}

router.get('/', (req: Request, res: Response) => {
  res.json(`users:  ${JSON.stringify(users)} `);
});

router.get('/words', jsonParser, (req: Request, res: Response) => {
  const limit = req.query.limit
    ? parseInt(req.query.limit as string)
    : undefined;
  const result = limit ? words.slice(0, limit) : words;
  res.json(result);
});

router.post('/words/:id', (req: Request, res: Response) => {
  const newWord = req.body;
  words.push(newWord);
  res.json(words);
});

router.delete('/words/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  words = words.filter((word) => word.id !== id);
  res.json(words);
});

router.patch('/words/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedWords = req.body;
  words = words.map((word) => {
    if (word.id === id) {
      return {...word, ...updatedWords};
    }
    return word;
  });
  res.json(words);
});

router.post('/login', jsonParser, async (req: Request, res: Response) => {
  const {email, password, id}: IAuth = await req.body;
  try {
    const user = users.find(
      (e) => e.email === email && e.password === password,
    );
    if (user) {
      const token = jwt.sign(
        {email: user.email, password: user.password},
        `${id}`,
      );
      return res.status(200).json({token});
    } else {
      return res.status(400).json('Не верный email или пароль');
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    } else {
      return res.status(500).send(String(error));
    }
  }
});

router.post('/register', jsonParser, async (req: Request, res: Response) => {
  const {email, password, id}: IAuth = await req.body;
  try {
    const user = users.find(
      (e) => e.email === email && e.password === password,
    );
    if (user) {
      return res.status(400).json('Email уже используется');
    }
    users.push({email, password, id});
    fs.writeFileSync(USERS_JSON_FILE, JSON.stringify({users: [...users]}));
    return res.status(200).json('Success');
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    }
    return res.status(500).send(String(error));
  }
});

export default router;

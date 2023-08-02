import express, {Express} from 'express';
import cors from 'cors';
import router from './routes';
import {createServer} from 'http';

const app: Express = express();
app.use(cors({origin: '*'}));
app.use(router);
const index = createServer(app);

export default index;

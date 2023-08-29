export interface IAuth {
  email: string;
  password: string;
  id: string;
}

export interface IUserData {
  users: IAuth[];
}

export interface IWord {
  id: string;
  value: string;
}
export interface IWords {
  words: IWord;
}

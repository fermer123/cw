export interface IAuthDataRequest {
  email: string;
  password: string;
  id: string;
}

// wordsApi
export interface IWord {
  id: string;
  value: string;
}
export interface IWords {
  words: IWord[];
}

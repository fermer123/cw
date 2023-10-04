import {Dispatch, SetStateAction} from 'react';
import {AxiosError} from 'axios';
import {NavigateFunction} from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const axiosError = (error: unknown): error is AxiosError => {
  return error instanceof AxiosError;
};
type SetError = (error: string) => void;
type SetUser<T> = (
  value: (T extends string ? string : unknown) | ((val: T) => T),
) => void;
type SetWords = Dispatch<SetStateAction<IWords>>;

export type TEmail = string;
export type TPassword = string;

// wordsApi
export interface IWord {
  id: string;
  value: string;
}
export interface IWords {
  words: IWord[];
}
// authApi
export interface IAuthData {
  email: TEmail;
  password: TPassword;
}

export interface IUserAuthProps<T> {
  email: TEmail;
  password: TPassword;
  setError: SetError;
  setUser: SetUser<T>;
  push: NavigateFunction;
}

export interface IWordsData {
  setError: SetError;
  setWords: SetWords;
}
export const isStringArray = (arr: unknown): arr is string[] => {
  if (Array.isArray(arr) && arr.every((e) => typeof e === 'string')) {
    return true;
  }
  return false;
};
export const isNumberArray = (arr: unknown): arr is number[] => {
  if (Array.isArray(arr) && arr.every((e) => typeof e === 'number')) {
    return true;
  }
  return false;
};

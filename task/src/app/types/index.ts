import {Dispatch, SetStateAction} from 'react';
import {AxiosError} from 'axios';
import {NavigateFunction} from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const axiosError = (error: unknown): error is AxiosError => {
  return error instanceof AxiosError;
};

type TEmail = string;
type TPassword = string;

type SetError = (error: string) => void;

type SetUser<T> = (
  value: (T extends string ? string : unknown) | ((val: T) => T),
) => void;

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

export type IWords = string[];

type SetWords = Dispatch<SetStateAction<IWords>>;

export interface IWordsData {
  setError: SetError;
  setWords: SetWords;
}

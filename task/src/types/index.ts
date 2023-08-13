import {AxiosError} from 'axios';
import {Dispatch, SetStateAction} from 'react';
import {NavigateFunction} from 'react-router-dom';

const axiosError = (error: unknown): error is AxiosError => {
  return error instanceof AxiosError;
};

type email = string;
type password = string;

type SetError = (error: string) => void;

type SetUser<T> = (
  value: (T extends string ? string : unknown) | ((val: T) => T),
) => void;

export interface IAuthData {
  email: email;
  password: password;
}

export interface IUserAuthProps<T> {
  email: email;
  password: password;
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

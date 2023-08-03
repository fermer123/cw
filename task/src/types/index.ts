import {AxiosError} from 'axios';
import {NavigateFunction} from 'react-router-dom';

type email = string;

type SetError = (error: string) => void;

type SetUser<T> = (
  value: (T extends string ? string : unknown) | ((val: T) => T),
) => void;

export interface IUserAuthProps<T> {
  email: email;
  password: string;
  setError: SetError;
  setUser: SetUser<T>;
  push: NavigateFunction;
}

const axiosError = (error: unknown): error is AxiosError => {
  return error instanceof AxiosError;
};

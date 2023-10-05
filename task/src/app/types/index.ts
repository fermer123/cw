import {AxiosError} from 'axios';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const axiosError = (error: unknown): error is AxiosError => {
  return error instanceof AxiosError;
};
export interface IAuthData {
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

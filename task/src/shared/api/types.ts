import {Dispatch, SetStateAction} from 'react';
import {NavigateFunction} from 'react-router-dom';

import {IWords} from '@app/types';

type SetUser<T> = (
  value: (T extends string ? string : unknown) | ((val: T) => T),
) => void;
export interface IUserAuthProps<T> {
  email: string;
  password: string;
  setError: (error: string) => void;
  setUser: SetUser<T>;
  push: NavigateFunction;
}
export interface IWordsData {
  setError: (error: string) => void;
  setWords: Dispatch<SetStateAction<IWords>>;
}

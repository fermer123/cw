import {AxiosError, isAxiosError} from 'axios';
import {v4 as uuidv4} from 'uuid';

import {IUserAuthProps} from '@src/types';

import axios from '../index';

const Login = async <T>({
  email,
  password,
  push,
  setError,
  setUser,
}: IUserAuthProps<T>) => {
  try {
    await axios.post('/login', {
      email,
      password,
      id: uuidv4(),
    });
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      // type guard
    }
  }
};

export default Login;

import {AxiosError, isAxiosError} from 'axios';
import {NavigateFunction} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

import axios from '../index';

type SetUser<T> = (
  value: (T extends string ? string : unknown) | ((val: T) => T),
) => void;
interface IUserAuthProps<T> {
  email: string;
  password: string;
  setError: (error: string) => void;
  setUser: SetUser<T>;
  push: NavigateFunction;
}

const Register = async <T>({
  email,
  password,
  push,
  setError,
  setUser,
}: IUserAuthProps<T>): Promise<void> => {
  try {
    await axios.post('/register', {
      email,
      password,
      id: uuidv4(),
    });
    setUser(email);
    setError('');
    push('/');
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError;
      setError(String(axiosError.response?.data) ?? 'error');
    } else {
      setError(String(error));
    }
  }
};

export default Register;

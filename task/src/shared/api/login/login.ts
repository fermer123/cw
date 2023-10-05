import {AxiosError, isAxiosError} from 'axios';
import {v4 as uuidv4} from 'uuid';

import axios from '../index';
import {IUserAuthProps} from '../types';

const Login = async <T>({
  email,
  password,
  push,
  setError,
  setUser,
}: IUserAuthProps<T>): Promise<void> => {
  try {
    await axios.post('/login', {
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

export default Login;

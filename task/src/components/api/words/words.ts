/* eslint-disable @typescript-eslint/no-unsafe-call */
import {AxiosError, isAxiosError} from 'axios';

import {IWordsData} from '@src/types';

import axios from '../index';

const GetWords = async <T>({setError, setWords}: IWordsData<T>) => {
  try {
    const resp = await axios.get('/words');
    setWords(resp);
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError;
      setError(String(axiosError.response?.data) ?? 'error');
    } else {
      setError(String(error) ?? 'error');
    }
  }
};

export default GetWords;

import {Dispatch, SetStateAction} from 'react';
import {AxiosError, AxiosResponse, isAxiosError} from 'axios';

import {IWords} from '@src/app/types';

import axios from '../index';

interface IWordsData {
  setError: (error: string) => void;
  setWords: Dispatch<SetStateAction<IWords>>;
}
const GetWords = async ({setError, setWords}: IWordsData) => {
  try {
    const resp: AxiosResponse<IWords> = await axios.get('/words');
    setWords(resp.data);
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError;
      setError(String(axiosError?.message) ?? 'error');
    } else {
      setError(String(error));
    }
  }
};

export default GetWords;

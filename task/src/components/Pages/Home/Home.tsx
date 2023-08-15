/* eslint-disable @typescript-eslint/no-unused-vars */
import {FC, useCallback, useEffect, useState} from 'react';

import GetWords from '@src/components/api/words/words';
import LoadingSpinner from '@src/components/component/Loading/LoadingSpinner';
import {IWords} from '@src/types';

import {EndGameLabel, HomeContainer} from './Home.styled';
import heavyFunction from './test';

const Home: FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [words, setWords] = useState<IWords | null>(null);
  const [win, setWin] = useState<boolean>(false);
  const [result, setResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    GetWords({setError, setWords});
  }, []);

  const generateRandomWord = useCallback((wordsArray: IWords): string => {
    if (wordsArray && wordsArray.length) {
      return wordsArray[Math.floor(Math.random() * wordsArray.length)];
    }
    return '';
  }, []);

  const fn = () => {
    setResult('');
    setIsLoading(true);
    const worker = new Worker('worker.js');

    worker.onmessage = (e) => {
      setResult(String(e.data));
      setIsLoading(false);
    };
    worker.postMessage({message: 'start'});
  };

  return (
    <HomeContainer>
      {isLoading && <LoadingSpinner />}
      <button type='button' onClick={fn}>
        start
      </button>
      <EndGameLabel>{result}</EndGameLabel>
    </HomeContainer>
  );
};

export default Home;

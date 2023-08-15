/* eslint-disable @typescript-eslint/no-unused-vars */
import {FC, useCallback, useEffect, useState} from 'react';

import GetWords from '@src/components/api/words/words';
import LoadingSpinner from '@src/components/component/Loading/LoadingSpinner';
import {IWords} from '@src/types';

import {EndGameLabel, HomeContainer} from './Home.styled';

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
  const worker = new Worker('/test.ts');
  const fn = () => {
    setResult('');
    setIsLoading(true);
    worker.onmessage = (event) => {
      setIsLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      setResult(event.data.toString());
    };
    worker.postMessage(null);
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

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

  return (
    <HomeContainer>
      {isLoading && <LoadingSpinner />}
      <button type='button' onClick={() => console.log('click')}>
        click
      </button>
      <EndGameLabel>{result}</EndGameLabel>
    </HomeContainer>
  );
};

export default Home;

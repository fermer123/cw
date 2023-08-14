/* eslint-disable @typescript-eslint/no-unused-vars */
import {FC, useCallback, useEffect, useState} from 'react';

import GetWords from '@src/components/api/words/words';
import {IWords} from '@src/types';

import {EndGameLabel, HomeContainer} from './Home_style';

const Home: FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [words, setWords] = useState<IWords | null>(null);
  const [win, setWin] = useState<boolean>(false);
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
      <EndGameLabel>123</EndGameLabel>
    </HomeContainer>
  );
};

export default Home;

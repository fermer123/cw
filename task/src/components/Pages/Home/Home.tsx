/* eslint-disable @typescript-eslint/no-unused-vars */
import {FC, useState} from 'react';

import LoadingSpinner from '@src/components/component/Loading/LoadingSpinner';
import {useGetWordsQuery} from '@src/store/wordsApi';
import {IWords} from '@src/types';

import {HomeContainer} from './Home.styled';

const Home: FC = () => {
  const {data, isLoading} = useGetWordsQuery('');
  console.log('qwe');
  console.log(isDev);
  return (
    <HomeContainer>
      {isLoading && <LoadingSpinner />}
      <ul>
        {(data as IWords)?.map((e: string, idx: number) => (
          <li key={idx}>{e}</li>
        ))}
      </ul>
    </HomeContainer>
  );
};

export default Home;

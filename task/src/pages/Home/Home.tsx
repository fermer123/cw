/* eslint-disable react/no-array-index-key */
import {FC} from 'react';

import LoadingSpinner from '@entities/Loading/LoadingSpinner';
import {useGetWordsQuery} from '@src/store/wordsApi';

import {HomeContainer} from './Home.styled';

const Home: FC = () => {
  const {data: wordsData, isLoading} = useGetWordsQuery('');

  return (
    <HomeContainer>
      {isLoading && <LoadingSpinner />}
      <ul>
        {wordsData?.words.map(({id, value}) => <li key={id}>{value}</li>)}
      </ul>
    </HomeContainer>
  );
};

export default Home;

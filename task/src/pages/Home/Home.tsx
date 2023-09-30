/* eslint-disable react/no-array-index-key */
import {FC} from 'react';

import LoadingSpinner from '@entities/Loading/LoadingSpinner';
import NotFoundPage from '@pages/NotFoundPage/NotFoundPage';
import {useGetWordsQuery} from '@src/store/api/wordsApi';

import {HomeContainer} from './Home.styled';

const Home: FC = () => {
  const {data: wordsData, isLoading, isError} = useGetWordsQuery('');
  if (isError) return <NotFoundPage />;
  return (
    <HomeContainer>
      {isLoading && <LoadingSpinner />}
      <ul>{wordsData?.map(({id, value}) => <li key={id}>{value}</li>)}</ul>
    </HomeContainer>
  );
};

export default Home;

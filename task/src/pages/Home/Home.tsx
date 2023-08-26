import {FC} from 'react';

import LoadingSpinner from '@src/entities/Loading/LoadingSpinner';
import {useGetWordsQuery} from '@src/store/wordsApi';

import {HomeContainer} from './Home.styled';

const Home: FC = () => {
  const {data: wordsData, isLoading} = useGetWordsQuery('');
  return (
    <HomeContainer>
      {isLoading && <LoadingSpinner />}
      <ul>
        {wordsData?.map((e: string, idx: number) => <li key={idx}>{e}</li>)}
      </ul>
    </HomeContainer>
  );
};

export default Home;

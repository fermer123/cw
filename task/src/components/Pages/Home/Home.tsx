/* eslint-disable @typescript-eslint/no-unused-vars */
import {FC, useEffect, useState} from 'react';

import GetWords from '@src/components/api/words/words';

const Home: FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [words, setWords] = useState<Array<string> | null>(null);

  useEffect(() => {
    GetWords({setError, setWords});
  }, []);
  return <div>home</div>;
};

export default Home;

import {FC, useState} from 'react';

const Home: FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [words, setWords] = useState<Array<string> | null>(null);

  return <div>home</div>;
};

export default Home;

import {FC, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import Login from '@src/components/api/login/login';
import useInput from '@src/components/component/Hook/UseInput/useInput';
import useLocalStorage from '@src/components/component/Hook/UseLocalStorage/useLocalStorage';

const Home: FC = () => {
  const {value, onChange} = useInput('');
  const [, setUser] = useLocalStorage<string>('user', '');
  const [error, setError] = useState<string>('');
  const push = useNavigate();
  const log = () => {
    Login({
      email: 'asdzxc',
      push,
      password: 'asdasd',
      setUser,
      setError,
    });
  };
  return (
    <div>
      <input onChange={onChange} value={value} />
      <div>{value}</div>
      <button type='button' onClick={log}>
        click
      </button>
    </div>
  );
};

export default Home;

import {FC} from 'react';

const App: FC = () => {
  const fn = (value: unknown): value is number => {
    return typeof value === 'number';
  };

  const fn1 = (value: unknown) => {
    if (fn(value)) {
      console.log(value);
    } else {
      console.log('not number');
    }
  };

  fn1('123');
  fn1(123);

  return <div>123</div>;
};

export default App;

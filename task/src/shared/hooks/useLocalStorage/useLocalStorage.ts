import {useState} from 'react';

type SetValue<T> = (value: T | ((val: T) => T)) => void;

const useLocalStorage = <T>(key: string, initialValue: T): [T, SetValue<T>] => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue: SetValue<T> = (value) => {
    try {
      const newValue = value instanceof Function ? value(storedValue) : value;
      window.localStorage.setItem(key, JSON.stringify(newValue));
      setStoredValue(newValue);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error(error as string);
      }
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;

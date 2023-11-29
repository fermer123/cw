import {useMemo} from 'react';

import useAppSelector from './useAppSelector';

export const useAuth = () => {
  const user = useAppSelector((state) => state.auth.name);

  return useMemo(() => ({user}), [user]);
};

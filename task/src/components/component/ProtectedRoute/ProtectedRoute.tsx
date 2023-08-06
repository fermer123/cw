import {FC, ReactElement} from 'react';
import {Navigate} from 'react-router-dom';

export interface IProtectedRouteProps {
  user: string;
  children: ReactElement | null;
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({user, children}) => {
  if (!user) {
    return <Navigate to='/register' replace />;
  }

  return children;
};
export default ProtectedRoute;

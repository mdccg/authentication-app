import { useContext } from 'react';
import { UserContext } from './../../context/UserContext';
import { Navigate } from 'react-router-dom';

type ProtectedRouterProps = {
  children: JSX.Element;
}

const ProtectedRouter = ({ children }: ProtectedRouterProps) => {
  const { token } = useContext(UserContext);

  // TODO Ponto crítico extremamente carente de refatoração
  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRouter;
import { useNavigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

const Auth = ({ children }) => {
  const navigate = useNavigate();
  const { route } = useAuthenticator((context) => [context.route]);
  if (route !== 'authenticated') {
    navigate("/login")
  }
  return children;
}

export default Auth
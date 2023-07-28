import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../components/redux/auth/slice';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return {
    isLoggedIn,
  };
};

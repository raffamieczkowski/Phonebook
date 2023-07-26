import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../redux/authSlice';

const UserMenu = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem('token');
  };

  return (
    <div>
      {user ? (
        <div>
          <p>{user.email}</p>
          <button onClick={handleLogout}>Wyloguj się</button>
        </div>
      ) : (
        <div>
          <Link to="/login">Zaloguj się</Link>
          <Link to="/register">Zarejestruj się</Link>
        </div>
      )}
    </div>
  );
};

export default UserMenu;

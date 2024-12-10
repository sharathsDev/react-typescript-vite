import { useContext } from 'react';
import { UserContext } from './UserContext';

const User = () => {
  const userContext = useContext(UserContext);
  function handleLogin() {
    userContext?.setUser({
      name: 'Bruce',
      email: 'YV8J2@example.com',
    });
  }
  function handleLogout() {
    userContext?.setUser(null);
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext?.user?.name}</div>
      <div>User email is {userContext?.user?.email}</div>
    </div>
  );
};

export default User;

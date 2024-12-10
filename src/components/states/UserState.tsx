import { useState } from 'react';
import { AuthUser } from '../../types/componentTypes';

const UserState = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: 'Bruce',
      email: 'YV8J2@example.com',
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};

export default UserState;

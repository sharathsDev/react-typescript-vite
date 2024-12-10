import { useState } from 'react';
import { AuthUser, ContextProviderProps } from '../../types/componentTypes';
import { UserContext } from './UserContext';

const UserContextProvider = ({ children }: ContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

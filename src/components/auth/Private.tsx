import React from 'react';
import Login from './Login';
import { ProfileProps } from './Profile';
type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  return isLoggedIn ? <Component name="Sharath" /> : <Login />;
};

export default Private;

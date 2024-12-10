export type GreetProps = {
  name?: string;
  messageCount?: number;
  isLoggedIn?: boolean;
};

export type AuthContextType = {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
};

export type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

export type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};
export enum statusValues {
  loading = 'loading',
  success = 'success',
  error = 'error',
}
export interface StatusProps {
  status: statusValues;
}

export type HeadingProps = {
  children: string;
};

export type OscarProps = {
  children: React.ReactNode;
};

export type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ContainerProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export type AuthUser = {
  name: string;
  email: string;
};

export type CounterState = { count: number };

export type UpdateAction = {
  type: 'increment' | 'decrement';
  payload: number;
};

export type ResetAction = {
  type: 'reset';
};

export type CounterAction = UpdateAction | ResetAction;

export type ContextProviderProps = { children: React.ReactNode };

export type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

import { createContext } from 'react';
import { UserContextType } from '../../types/componentTypes';

export const UserContext = createContext<UserContextType | null>(null);

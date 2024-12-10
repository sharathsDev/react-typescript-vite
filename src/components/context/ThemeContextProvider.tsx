import { theme } from './themeValue';
import { ContextProviderProps } from '../../types/componentTypes';
import { ThemeContext } from './ThemeContext';

const ThemeContextProvider = ({ children }: ContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

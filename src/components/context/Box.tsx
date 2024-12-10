import { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext';

const Box = () => {
  const theme = useContext(ThemeContext);
  const [changeTheme, setChangeTheme] = useState(theme.primary);
  function handleChangeTheme() {
    if (changeTheme === theme.primary) {
      setChangeTheme(theme.secondary);
    } else {
      setChangeTheme(theme.primary);
    }
  }
  return (
    <>
      <button
        onClick={handleChangeTheme}
        className="rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700"
      >
        Change Theme
      </button>
      <div
        style={{ backgroundColor: changeTheme.main, color: changeTheme.text }}
      >
        theme using context api
      </div>
    </>
  );
};

export default Box;

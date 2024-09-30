import { useState, useEffect } from 'react';
import { ThemeContext } from './context/theme'; // Import ThemeContext
import ThemeBtn from './component/ThemeBtn';
import Card from './component/Card';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const darkTheme = () => {
    setThemeMode('dark');
  };

  const lightTheme = () => {
    setThemeMode('light');
  };

  // Change the theme in the HTML element
  useEffect(() => {
    let htmlElement = document.querySelector('html').classList;
    htmlElement.remove('light', 'dark');
    htmlElement.add(themeMode);
  }, [themeMode]);

  return (
    // Use ThemeContext.Provider to provide the context values
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center bg-slate-700">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

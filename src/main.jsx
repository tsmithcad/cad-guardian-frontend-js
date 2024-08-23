// src/main.jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from './theme';
import './App.css';
import localStorageUtil from './utils/localStorageUtil'; // Import the utility

const root = ReactDOM.createRoot(document.getElementById('root'));

const Main = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Retrieve the theme preference from localForage
    const loadThemePreference = async () => {
      const storedTheme = await localStorageUtil.getItem('theme');
      if (storedTheme === 'dark') {
        setIsDarkMode(true);
      }
    };

    loadThemePreference();
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorageUtil.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <App toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
    </ThemeProvider>
  );
};

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

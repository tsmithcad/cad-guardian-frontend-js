// src/main.jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from './theme';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Main = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <App toggleDarkMode={toggleDarkMode} />
    </ThemeProvider>
  );
};

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// src/theme.js
import { createTheme } from '@mui/material/styles';

const lightThemeColors = {
  primary: '#1976d2',
  secondary: '#dc004e',
  background: '#F5F5F7',
  text: '#000000',
  button: '#000000',
  buttonText: '#ffffff', // Text color for filled button
  buttonOutlineText: '#1976d2', // Text color for outlined button
  card: '#ffffff',
  cardBorder: '#cccccc',
  svg: '#000000', // SVG color for light mode
};

const darkThemeColors = {
  primary: '#90caf9',
  secondary: '#f48fb1',
  background: '#121212',
  text: '#ffffff',
  button: '#676767',
  buttonText: '#121212', // Text color for filled button
  buttonOutlineText: '#676767', // Text color for outlined button
  card: '#1e1e1e',
  cardBorder: '#444444',
  svg: '#ffffff', // SVG color for dark mode
};

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: lightThemeColors.primary,
    },
    secondary: {
      main: lightThemeColors.secondary,
    },
    background: {
      default: lightThemeColors.background,
      paper: lightThemeColors.card,
    },
    text: {
      primary: lightThemeColors.text,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: lightThemeColors.button,
          color: lightThemeColors.buttonText,
          '&:hover': {
            backgroundColor: lightThemeColors.primary,
            color: lightThemeColors.buttonText,
          },
        },
        outlined: {
          backgroundColor: lightThemeColors.background,
          borderColor: lightThemeColors.button,
          color: lightThemeColors.text,
          '&:hover': {
            backgroundColor: lightThemeColors.primary,
            color: lightThemeColors.background,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderColor: lightThemeColors.cardBorder,
        },
      },
    },
  },
  svg: lightThemeColors.svg,
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: darkThemeColors.primary,
    },
    secondary: {
      main: darkThemeColors.secondary,
    },
    background: {
      default: darkThemeColors.background,
      paper: darkThemeColors.card,
    },
    text: {
      primary: darkThemeColors.text,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: darkThemeColors.button,
          color: darkThemeColors.buttonText,
          '&:hover': {
            backgroundColor: darkThemeColors.primary,
            color: darkThemeColors.buttonText,
          },
        },
        outlined: {
          backgroundColor: darkThemeColors.background,
          borderColor: darkThemeColors.button,
          color: darkThemeColors.buttonOutlineText,
          '&:hover': {
            backgroundColor: darkThemeColors.primary,
            color: darkThemeColors.background,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderColor: darkThemeColors.cardBorder,
        },
      },
    },
  },
  svg: darkThemeColors.svg,
});

export { lightTheme, darkTheme };
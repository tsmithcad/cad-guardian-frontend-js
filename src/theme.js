import { createTheme } from '@mui/material/styles';

const lightThemeColors = {
  primary: '#000000',
  secondary: '#dc004e',
  background: '#F5F5F7',
  text: '#000000',
  button: '#000000',
  buttonText: '#ffffff',
  buttonOutlineText: '#1976d2',
  card: '#ffffff',
  cardBorder: '#cccccc',
  svg: '#000000',
  link: '#000000',          // Link color for light mode
  linkHover: '#1565c0',     // Link hover color for light mode
  linkVisited: '#5c6bc0',   // Link visited color for light mode
};

const darkThemeColors = {
  primary: '#000000',
  secondary: '#f48fb1',
  background: '#121212',
  text: '#ffffff',
  button: '#676767',
  buttonText: '#ffffff',
  buttonOutlineText: '#676767',
  card: '#1e1e1e',
  cardBorder: '#444444',
  svg: '#ffffff',
  link: '#676767',          // Link color for dark mode
  linkHover: '#64b5f6',     // Link hover color for dark mode
  linkVisited: '#42a5f5',   // Link visited color for dark mode
};

const lightTheme = createTheme({
  typography: {
    h1: {
      fontSize: '1.25rem', // Matching h5 size
    },
    h2: {
      fontSize: '1rem', // Matching h6 size
    },
    // Optionally, you can also adjust other heading levels or styles here
  },
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
    MuiLink: {
      styleOverrides: {
        root: {
          color: lightThemeColors.link,
          '&:hover': {
            color: lightThemeColors.linkHover,
          },
          '&:visited': {
            color: lightThemeColors.linkVisited,
          },
        },
      },
    },
  },
  svg: lightThemeColors.svg,
});

const darkTheme = createTheme({
  typography: {
    h1: {
      fontSize: '1.25rem', // Matching h5 size
    },
    h2: {
      fontSize: '1rem', // Matching h6 size
    },
    // Optionally, you can also adjust other heading levels or styles here
  },
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
    MuiLink: {
      styleOverrides: {
        root: {
          color: darkThemeColors.link,
          '&:hover': {
            color: darkThemeColors.linkHover,
          },
          '&:visited': {
            color: darkThemeColors.linkVisited,
          },
        },
      },
    },
  },
  svg: darkThemeColors.svg,
});

export { lightTheme, darkTheme };

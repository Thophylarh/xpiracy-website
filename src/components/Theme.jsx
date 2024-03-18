import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    // Define your custom color here
    customColor: {
      main: '#ffa726',
    },
  },
});

export default theme;

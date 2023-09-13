import { createTheme } from '@mui/material/styles';

export const main_theme = createTheme({
  palette: {
    primary: {
      light: '#E3F2FD',
      main: '#2196F3',
      dark: '#1E88E5',
    },
    secondary: {
      light: '#EDE7F6',
      main: '#673AB7',
      dark: '#5E35B1',
    },
    success: {
      light: '#B9F6CA',
      main: '#69F0AE',
      dark: '#00C853',
    },
    warning: {
      light: '#B9F6CA',
      main: '#FFE57F',
      dark: '#FFC107',
    },
    error: {
      light: '#EF9A9A',
      main: '#F44336',
      dark: '#C62828',
    },
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          marginTop: 3,
          // marginBottom: 3,
          borderRadius: 8,
          '&:hover': {
            backgroundColor: '#EDE7F6',
            color: '#673AB7',
          },
          '&.Mui-selected': {
            backgroundColor: '#EDE7F6',
            color: '#673AB7',
            '&:hover': {
              backgroundColor: '#EDE7F6',
            },
            '& .MuiListItemText-primary': {
              fontWeight: 500,
            },
            '& .MuiListItemButton-root': {
              '&:hover': {
                backgroundColor: '#fff',
              },
              '&.Mui-selected': {
                backgroundColor: '#fff',
              },
            },
          },
        },
      },
    },
  },
});

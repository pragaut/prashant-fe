import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import PrimaryLayout from '../components/templates/layouts/primary/PrimaryLayout';
import '../styles/globals.css';
import { main_theme } from '../styles/themes/theme';
import { createApolloClient } from '../utils/apolloClient';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = createApolloClient();
  const [pageTitle, setPageTitle] = useState('');
  const [userRole, setUserRole] = useState('');

  const [snackbar, setSnackbar] = useState({
    state: false,
    duration: 3000,
    message: '',
    color: 'success',
  });

  const [dialog, setDialog] = useState({
    title: '',
    content: '',
    actions: <></>,
    state: false,
    form: <></>,
  });

  const showSnackbar = (
    state: boolean,
    duration: number,
    message: string,
    color: 'success' | 'info' | 'warning' | 'error'
  ) => {
    setSnackbar({
      state: state,
      duration: duration,
      message: message,
      color: color,
    });
    setTimeout(() => {
      hideSnackbar(color, message);
    }, duration);
  };

  const hideSnackbar = (color: string, message: string) => {
    setSnackbar({
      ...snackbar,
      state: false,
      color: color,
      message: message,
    });
  };

  const showDialog = (
    title: string,
    content: string,
    actions: any,
    state: boolean,
    form: any
  ) => {
    setDialog({
      title: title,
      content: content,
      actions: actions,
      state: state,
      form: form,
    });
  };

  const hideDialog = () => {
    setDialog({
      ...dialog,
      state: false,
    });
  };
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={main_theme}>
          <PrimaryLayout
            pageTitle={pageTitle}
            role={userRole}
            snackbar={snackbar}
            dialog={dialog}
          >
            <Component
              {...pageProps}
              setTitle={setPageTitle}
              setRole={setUserRole}
              setSnackbar={showSnackbar}
              showDialog={showDialog}
              hideDialog={hideDialog}
            />
          </PrimaryLayout>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;

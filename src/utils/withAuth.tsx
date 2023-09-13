import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SessionManager from './sessions';

export const withAuth = (WrappedComponent: any) => {
  return function WA(props: any) {
    const [Token, setToken] = useState('');
    const router = useRouter();

    useEffect(() => {
      // Check if token exists in localStorage
      const token = SessionManager.getAuthenticatedToken();
      // console.log('withAuth: ', token);
      // If token doesn't exist, redirect to login
      if (!token) {
        router.push('/login');
      } else {
        setToken(token);
      }
    }, [SessionManager]);

    // Render the wrapped component if authenticated, otherwise null
    return <>{Token ? <WrappedComponent {...props} /> : null}</>;
  };
};

import React from 'react';
import '../styles/globals.css'
import { AuthUserProvider } from '../context/AuthUserContext';


function App({ Component, pageProps }) {
  return <AuthUserProvider><Component {...pageProps} />
  </AuthUserProvider>
}

export default App
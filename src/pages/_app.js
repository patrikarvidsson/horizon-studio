import React from 'react';
import { Head } from 'next/document';
import 'tailwindcss/dist/base.min.css';

const App = ({ Component, pageProps }) => (
  <Component {...pageProps}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  </Component>
);

export default App;

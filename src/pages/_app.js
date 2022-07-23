import React from 'react';
import { Head } from 'next/document';
import PlausibleProvider from 'next-plausible'
import 'tailwindcss/dist/base.min.css';

const App = ({ Component, pageProps }) => (
  <PlausibleProvider domain="studio.patrikarvidsson.com">
    <Component {...pageProps}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </Component>
  </PlausibleProvider>
);

export default App;

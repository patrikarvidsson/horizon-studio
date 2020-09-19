import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import tw, { css } from 'twin.macro';

class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);

    // Determine if class name should be added
    return {
      ...initialProps,
      shouldShow: true
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/static/favicon.jpg" />
        </Head>
        <body
          css={[
            tw`font-sans bg-black text-white text-opacity-75 leading-relaxed font-light text-lg antialiased`,
            css`
              h1,
              h2,
              h3,
              h4 {
                ${tw`text-white text-opacity-100`}
              }
              p > a,
              li > a {
                ${tw`text-white font-normal hover:text-opacity-100 hover:text-primary transition duration-300`}
              }
            `
          ]}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;

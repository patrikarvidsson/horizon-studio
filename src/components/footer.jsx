import React from 'react';
import tw, { css } from 'twin.macro';

const Footer = () => (
  <footer tw="text-white text-opacity-50 text-center space-y-2 mt-32 py-24 text-sm">
    <p>
      Built with <a href="https://nextjs.org/">NextJS</a> and{' '}
      <a href="https://tailwindcss.com/">Tailwind</a>.
    </p>
    <p>
      <a href="https://github.com/patrikarvidsson/horizon-studio">
        Open Source
      </a>
    </p>
  </footer>
);

export default Footer;

import React from 'react';
import tw, { css } from 'twin.macro';

import { Logo, Navigation } from './';

const Header = () => (
  <header
    className="fixed"
    tw="flex items-center justify-between py-8 absolute w-full z-30 transition-colors duration-300"
    css={[
      css`
        &.header--scrolled {
          ${tw`bg-black`}
        }
      `
    ]}
  >
    <div tw="px-12 lg:px-32 flex items-center justify-between mx-auto w-full">
      <Logo />
      <Navigation />
    </div>
  </header>
);

export default Header;

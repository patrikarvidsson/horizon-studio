import React from 'react';
import tw, { css } from 'twin.macro';

const Block = ({
  image,
  isFullscreen,
  isCentered,
  isPortfolioItem,
  children
}) => (
  <div
    css={[
      tw`flex flex-col justify-center relative m-auto px-4 md:px-12 w-full`,
      isFullscreen != null ? tw`h-screen-95` : tw`lg:min-h-850 py-24`,
      isCentered && tw`text-center items-center`
    ]}
  >
    {children}
  </div>
);

export default Block;

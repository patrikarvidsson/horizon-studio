import React from 'react';
import tw, { css } from 'twin.macro';

const PortfolioGrid = ({
  image,
  isFullscreen,
  isCentered,
  isPortfolioItem,
  children
}) => (
  <div
    css={[
      tw`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-24 lg:gap-y-32 w-full relative px-8 xl:px-24 mx-auto`,
      isCentered && tw`text-center items-center`
    ]}
  >
    {children}
  </div>
);

export default PortfolioGrid;

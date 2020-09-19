import React from 'react';
import Link from 'next/link';
import 'twin.macro';

const Logo = () => (
  <Link hrew="/" href="/">
    <a tw="w-10 block" rel="noopener noreferrer">
      <Svg />
    </a>
  </Link>
);

const Svg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 160 160">
    <defs />
    <path
      fill="#fff"
      d="M22.4 129.2l60.8-98.8-60.8 98.8zm0 0l60.8-98.8 60.8 98.8L22.4 76 144 129.2 22.4 76 144 129.2 83.2 30.4l-60.8 98.8 60.8-98.8-60.8 98.8zm121.6 0L83.2 30.4l60.8 98.8z"
    />
    <path
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth="8"
      d="M22.4 129.2l60.8-98.8 60.8 98.8L22.4 76 144 129.2 22.4 76 144 129.2 83.2 30.4l-60.8 98.8zm0 0l60.8-98.8-60.8 98.8zm121.6 0L83.2 30.4m-60.8 98.8l60.8-98.8-60.8 98.8z"
    />
  </svg>
);

export default Logo;

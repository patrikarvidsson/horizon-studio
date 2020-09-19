import React from 'react';
import Link from 'next/link';
import 'twin.macro';

const Navigation = () => (
  <nav>
    <ul tw="space-x-4">
      <li tw="inline-block">
        <Link href="/about">
          <a>Biography</a>
        </Link>
      </li>
      <li tw="inline-block">
        <a href="https://patrikarvidsson.com">Wiki</a>
      </li>
    </ul>
  </nav>
);

export default Navigation;

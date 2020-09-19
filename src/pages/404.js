import Link from 'next/link';
import tw from 'twin.macro';

import { Layout } from './../components';

export default function NotFound() {
  return (
    <Layout title="Not found | Studio">
      <div tw="max-w-xl mx-auto pt-56 space-y-4 text-center px-8">
        <h3 tw="text-6xl text-white text-opacity-25 font-bold">404</h3>
        <p tw="text-white text-opacity-75">
          The page you are looking for cannot be found.{' '}
          <Link href="/">
            <a>Return home</a>
          </Link>
          .
        </p>
      </div>
    </Layout>
  );
}

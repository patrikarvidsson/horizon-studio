import Link from 'next/link';
import tw from 'twin.macro';

import { Layout } from './../components';

import data from '../data/about.data.json';

export default function About() {
  return (
    <Layout title="Biography | Studio">
      <div tw="max-w-xl mx-auto pt-56 space-y-6">
        <h2 tw="text-3xl">{data.title}</h2>
        {data.text.map((paragraph) => (
          <p tw="text-xl">{paragraph}</p>
        ))}
      </div>
    </Layout>
  );
}

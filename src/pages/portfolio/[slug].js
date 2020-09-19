import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import tw, { css } from 'twin.macro';

import Scrollbar from 'react-smooth-scrollbar';

import { Layout } from './../../components';

const root = process.cwd();

export default function BlogPost({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource);

  return (
    <Layout
      title={frontMatter.title + ' | Studio'}
      description={frontMatter.metaDescription}
    >
      {frontMatter.image != null ? (
        <>
          <div
            className="fadeOut"
            tw="z-0 transition ease-in-out h-screen-75 mb-20"
          >
            <img
              src={frontMatter.image}
              alt="Title"
              tw="object-cover h-full w-full rounded"
            />
          </div>
        </>
      ) : null}
      <div
        css={[
          tw`space-y-6 max-w-xl text-white text-opacity-75 mx-auto max-w-2xl`,
          css`
            p {
              ${tw`mx-6`}
            }
            strong {
              ${tw`text-white`}
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              ${tw`text-white mx-6 leading-normal`}
            }
            h2 {
              ${tw`text-2xl`}
            }
            h3 {
              ${tw`text-xl`}
            }
            img {
              ${tw`my-10`}
            }
          `
        ]}
      >
        <h1 tw="text-4xl">{frontMatter.title}</h1>
        {content}
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: fs
      .readdirSync(path.join(root, 'content'))
      .map((p) => ({ params: { slug: p.replace(/\.mdx/, '') } }))
  };
}
export async function getStaticProps({ params }) {
  const source = fs.readFileSync(
    path.join(root, 'content', `${params.slug}.mdx`),
    'utf8'
  );
  const { data, content } = matter(source);
  const mdxSource = await renderToString(content);
  return { props: { mdxSource, frontMatter: data } };
}

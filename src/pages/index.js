import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Scrollbar from 'react-smooth-scrollbar';

import React, { useEffect } from 'react';
import Link from 'next/link';
import _ from 'lodash';

const root = process.cwd();
import tw, { css } from 'twin.macro';

import { Layout, Block, PortfolioGrid } from './../components';

import data from '../data/index.data.json';

export default function Index({ postData }) {
  const sortedPortfolioItems = _.orderBy(
    postData,
    ['frontMatter.date'],
    ['desc']
  );

  return (
    <Layout>
      <Block isFullscreen={true} isCentered={true}>
        <div className="fadeOut" tw="relative z-10 max-w-lg md:max-w-2xl">
          <div className="slowDown" tw="space-y-8">
            <h2 tw="text-2xl md:text-3xl">{data.title}</h2>
            <p tw="text-white text-opacity-50">
              <a href="mailto:hello@patrikarvidsson.com">
                Reach out and say hello
              </a>
            </p>
          </div>
        </div>
      </Block>

      <PortfolioGrid>
        {sortedPortfolioItems.map((item) => {
          return (
            <Link
              as={`/portfolio/${item.slug}`}
              href={`/portfolio/[slug]`}
              key={item.slug}
            >
              <a>
                <div key={item.slug} tw="relative w-full space-y-8">
                  {item.frontMatter.image != null ? (
                    <>
                      <div tw="h-350 z-0 duration-300 ease-in-out transform hover:scale-102">
                        <p tw="absolute text-sm font-medium bottom-0 left-0 m-6 bg-black py-1 px-2 rounded text-white">
                          {item.frontMatter.title}
                        </p>
                        <img
                          src={item.frontMatter.image}
                          alt={item.frontMatter.title}
                          tw="object-cover h-full w-full rounded"
                        />
                      </div>
                    </>
                  ) : null}
                  <div tw="max-w-2xl mx-auto space-y-4 z-10">
                    {item.frontMatter.date != null ? (
                      <p tw="text-white text-opacity-50 font-light">
                        {new Date(item.frontMatter.date).getFullYear()}
                        {item.frontMatter.ongoing == true ? (
                          <> — ongoing</>
                        ) : null}
                      </p>
                    ) : null}
                    <h3 tw="text-2xl leading-normal pr-6">
                      {item.frontMatter.description}
                    </h3>
                    <p
                      className="anchor"
                      tw="text-white font-normal cursor-pointer transition duration-300 hover:text-primary"
                    >
                      Read more
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
      </PortfolioGrid>
    </Layout>
  );
}

export async function getStaticProps() {
  const contentRoot = path.join(root, 'content');
  const postData = fs.readdirSync(contentRoot).map((p) => {
    const content = fs.readFileSync(path.join(contentRoot, p), 'utf8');
    return {
      slug: p.replace(/\.mdx/, ''),
      content,
      frontMatter: matter(content).data
    };
  });
  return { props: { postData } };
}

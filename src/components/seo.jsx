import React from 'react';
import { NextSeo } from 'next-seo';

const SEO = ({ metaTitle, metaDescription }) => {
  metaTitle = metaTitle != null ? metaTitle : 'Studio | Patrik Arvidsson';
  metaDescription =
    metaDescription != null
      ? metaDescription
      : 'Patrik is an interdisciplinary designer based in Sweden. He helps clients reimagine, prototype and design solutions for user interaction problems.';

  return (
    <NextSeo
      title={metaTitle}
      description={metaDescription}
      canonical="https://studio.patrikarvidsson.com"
      twitter={{
        handle: '@patrikarvidsson'
      }}
    />
  );
};

export default SEO;

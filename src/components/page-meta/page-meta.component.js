import Head from "next/head";

const Meta = props => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content={props.siteAuthor} />
        {props.siteDescription && <meta name="description" content={props.siteDescription} />}
        <meta name="keywords" content={props.siteKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/jpg" href="/static/favicon.jpg" />
        <link rel="sitemap" type="application/xml" href="/static/sitemap.xml" />
        {props.siteTitle && <title>{props.siteTitle}</title>}
      </Head>
    </>
  );
};

export default Meta;

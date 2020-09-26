import Link from "next/link";

import Layout from "../components/layout/layout.component";
import Main from "../components/main";
import Header from "../components/header/header.component";
import Footer from "../components/footer/footer.component";

import PageTitle from "../components/page-title/page-title.component";

export default (frontMatter) => {
  return ({ children: content }) => {
    return (
      <>
        <Layout meta={frontMatter}>
          <Main>
            <PageTitle title={frontMatter.title}>{frontMatter.title}</PageTitle>
            {content}
          </Main>
          <Footer />
        </Layout>
        <style global jsx>{`
          body {
            max-width: 660px;
          }
          h2,
          h3 {
            color: #fff;
            font-size: 1.33rem;
          }
          h4 {
            font-size: 18px;
            color: #fff;
          }
          ul {
            margin-top: 1rem;
          }
          table {
            max-width: calc(100vw - 15px);
            width: 750px;
            font-size: 16px;
          }
          table th {
            text-align: left;
            font-weight: normal;
          }
          img {
            margin: 1.27rem 0 0.68rem 0;
            max-width: 100%;
          }
          section {
            max-width: calc(100vw - 15px);
            margin-top: 2.06rem;
            width: 750px;
            font-size: 16px;
            display: grid;
            grid-column-gap: 0.78rem;
            grid-row-gap: 8px;
            grid-template-columns: 1fr 0.75fr min-content 62px;
          }
          section > div,
          section > time {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          blockquote {
            color: #fff;
          }
          blockquote p {
            font-style: italic;
            display: block;
            margin-bottom: 0.5rem;
          }
          blockquote ul {
            margin-top: 0rem;
            display: block;
            font-size: 16px;
          }
        `}</style>
      </>
    );
  };
};

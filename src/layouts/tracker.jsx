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
            font-weight: normal;
          }
          output {
            display: block;
            overflow: hidden;
            white-space: nowrap;
            font-size: 16px;
          }
          output p {
            display: block;
            margin: 0.5rem 0 0;
          }
          output span {
            opacity: 25%;
          }
        `}</style>
      </>
    );
  };
};

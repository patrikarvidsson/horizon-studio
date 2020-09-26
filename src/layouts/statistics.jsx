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
          h4 {
            color: #fff;
          }
          strong {
            color #fff;
          }
          output {
            max-width: calc(100vw - 15px);
            width: 100%;
            display: grid;
            grid-template-columns: 1fr;
            grid-column-gap: 3.33rem;
          }
          output a {
            color: #bbb;
          }
          output span {
            color: #555;
          }
          output h4 {
            margin: 1.62rem 0 1rem 0;
          }
          output > div div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0.4rem 0 0;
          }
          output p {
            color: #191919;
            font-size: 14px;
            font-family: monospace;
          }
          main > div,
          main > output > div > div {
            font-size: 16px;
            margin-bottom: 0.3rem;
            font-family: "Iosevka", monospace;
            color: #666;
          }
          h4 {
            margin-top: 3.33rem;
          }
          @media (min-width: 767px) {
            output {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (min-width: 960px) {
            output {
              width: 750px;
            }
          }
        `}</style>
      </>
    );
  };
};

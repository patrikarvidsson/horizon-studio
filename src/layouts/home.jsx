import Link from "next/link";

import Layout from "../components/layout/layout.component";
import Main from "../components/main";
import Header from "../components/header/header.component";
import Footer from "../components/footer/footer.component";

export default (frontMatter) => {
  return ({ children: content }) => {
    return (
      <>
        <Layout meta={frontMatter}>
          <Main>{content}</Main>
          <Footer />
        </Layout>
        <style global jsx>{`
          body {
            max-width: 600px;
          }

          ul {
            margin-top: 1rem;
          }
          h1 {
            color: #fff;
          }
          h1 span {
            color: #bbb;
            font-weight: 300;
          }
          h1,
          h2 {
            font-size: 1.16rem;
          }
        `}</style>
      </>
    );
  };
};

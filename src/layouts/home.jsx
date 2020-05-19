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
          <Header color="#fff" width={32} />
          <Main>{content}</Main>
          <Footer />
        </Layout>
        <style global jsx>{`
          main,
          footer {
            text-align: center;
          }

          ul {
            list-style-type: none;
          }
        `}</style>
      </>
    );
  };
};

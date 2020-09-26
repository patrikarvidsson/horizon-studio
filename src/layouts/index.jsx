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
          ul {
            margin-top: 1rem;
            list-style-type: none;
          }
        `}</style>
      </>
    );
  };
};

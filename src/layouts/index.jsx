import Layout from "../components/layout";
import Main from "../components/main";
import Nav from "../components/nav";
import Footer from "../components/footer/footer.component";

export default frontMatter => {
  return ({ children: content }) => {
    return (
      <>
        <Nav />
        <Layout meta={frontMatter}>
          <Main>{content}</Main>
        </Layout>
        <Footer />
        <style global jsx>{`
          ul {
            list-style-type: none;
          }
        `}</style>
      </>
    );
  };
};

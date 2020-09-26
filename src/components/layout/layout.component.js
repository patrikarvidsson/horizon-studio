import Meta from "./../page-meta/page-meta.component";

export default function Layout(props) {
  return (
    <>
      <Meta
        siteTitle={
          props.meta.title != null && props.meta.title != "Patrik Arvidsson"
            ? props.meta.title + " — Patrik Arvidsson"
            : "Patrik Arvidsson"
        }
        siteDescription={props.meta.metaDescription != null ? props.meta.metaDescription : null}
        siteAuthor={props.meta.metaAuthor != null ? props.meta.metaAuthor : "Patrik Arvidsson"}
        siteKeywords={props.meta.metaKeywords != null ? props.meta.metaKeywords : null}
      />
      {props.children}

      <style global jsx>{`
        @font-face {
          font-family: "Iosevka";
          font-style: regular;
          font-weight: 400;
          font-display: block;
          src: url("../../static/fonts/iosevka-regular.woff2") format("woff2"),
            url("../../static/fonts/iosevka-regular.woff") format("woff");
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          transition: 0.2s all;
        }

        html,
        body,
        #__next {
          height: 100%;
        }

        body {
          background: #000;
          color: #ccc;
          font: 18px/1.6 -apple-system, BlinkMacSystemFont, "Helvetica", sans-serif;
          font-weight: 300;
          height: 100vh;
        }

        #__next {
          padding: 3.33rem 4.77rem;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          animation: 0.6s intro;
        }

        nav {
          font-size: 15px;
          text-transform: uppercase;
        }

        nav h1 {
          display: inline-block;
          font-size: 15px;
          font-weight: 400;
        }

        ul {
          list-style-type: none;
        }

        main > * {
          margin: 0 0 1.27rem;
        }

        footer {
          padding: 1.27rem 0 1.62rem;
        }

        a {
          color: #fff;
          text-decoration: none;
          font-weight: 400;
        }

        a:hover {
          color: #4bd9b4;
        }

        h1,
        h2 {
          font-size: 1.42rem;
          line-height: 1.45;
          font-weight: 400;
        }
        h3,
        h4 {
          font-weight: 400;
        }

        @media (max-width: 600px) {
          #__next {
            padding: 2.06rem;
          }
        }

        @keyframes intro {
          0% {
            opacity: 0;
          }

          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}

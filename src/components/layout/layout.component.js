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
        :root {
          --w-100: rgba(255, 255, 255, 0.1);
          --w-200: rgba(255, 255, 255, 0.2);
          --w-600: rgba(255, 255, 255, 0.6);
          --w-700: rgba(255, 255, 255, 0.7);
          --w-800: rgba(255, 255, 255, 0.8);
          --w-full: rgba(255, 255, 255, 1);
          --b-full: #000;
          --a: #4bd9b4;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          transition: 0.2s color;
        }

        body {
          background: var(--b-full);
          color: var(--w-600);
          font: 14px/1.6 -apple-system, BlinkMacSystemFont, sans-serif;
          padding: 1.62rem;
          max-width: 560px;
          margin: 0 auto;
          display: flex;
          height: 100vh;
          align-items: center;
        }

        main {
          font-size: 18px;
          animation: 0.6s intro;
        }

        main > *,
        main p {
          margin: 0 0 1.27rem;
        }

        main a {
          border-bottom: 2px var(--w-200) dotted;
        }

        header,
        footer {
          font-family: "Hack", monospace;
          text-align: center;
          margin: 0 0 1.27rem;
          white-space: normal;
          animation: 0.6s intro;
        }

        a {
          color: var(--w-full);
          text-decoration: none;
        }

        a:hover {
          color: var(--a);
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          line-height: 1.5;
          color: var(--w-600);
          font-weight: 400;
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

const withMDX = require("@next/mdx");
const withMdxEnhanced = require("next-mdx-enhanced");

module.exports = withMdxEnhanced({
  pageExtensions: ["mdx", "md", "jsx", "js", "ts", "tsx"],
  layoutPath: "src/layouts",
  defaultLayout: true,
  fileExtensions: ["mdx", "md"],
  remarkPlugins: [],
  rehypePlugins: [],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: "prebuild|loader|both"
  }
})();

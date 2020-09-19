# Studio

Studio is a complement to <a href="https://patrikarvidsson.com">patrikarvidsson.com</a> which lists commercial projects, in a portfolio setting.

It is a lightweight website built with <a href="https://nextjs.org/">NextJS</a> and a few additional packages, hosted on <a href="https://vercel.com/">Vercel</a>. This project is still under development and is subject to change.

## Notable features

In addition to nextjs, the codebase utilizes several packages:

- <a href="https://emotion.sh/">Emotion</a> — Styled-components alternative.
- <a href="https://tailwindcss.com/">Tailwind</a> — Utility-first CSS framework.
- <a href="https://github.com/ben-rogerson/twin.macro">twin.macro</a> — Combines Emotion and Tailwind.
- <a href="https://www.framer.com/motion/">Framer Motion</a> — Animations library.
- <a href="https://github.com/idiotWu/react-smooth-scrollbar">reat-smooth-scrollbar</a> — Smooth scrollbar support.
- <a href="https://github.com/hashicorp/next-mdx-remote">next-mdx-remote</a> — MDX-support for Next.
- <a href="https://github.com/garmeeh/next-seo">next-seo</a> — SEO-support for Next.

## Get started

Clone project

```
git clone https://github.com/patrikarvidsson/horizon-studio
cd horizon-studio
```

Install packages

`yarn`

## Usage

Start development server

`yarn dev`

Build site

`yarn build`

## Deploy

Vercel (formerly Now) can automatically identify the configuration and deploy easily with `now-cli`. Run the following command to set it up.

`now`

Deploy to production by adding `--prod`.

`now --prod`

Administration can then be done on [Vercel](https://vercel.com/).

## Details

### Why Tailwind or Emotion?

If you used [Tachyons](https://tachyons.io/) before, you know about the benefits utility first CSS can provide compared to CSS framework like [Bootstrap](http://getbootstrap.com/).

Because [Tailwind](https://tailwindcss.com) gives you alot of classes as utilities, the file gets bloated very quickly. Most developers solve this by using tools like [purgeCSS](https://github.com/FullHuman/purgecss) which effectively decreases the file size. Yet, it gets you into the habit of loading styles that isn't necessary everywhere.

[More information on how you can control file size](https://tailwindcss.com/docs/controlling-file-size)

This respository uses [Emotion](https://github.com/emotion-js/emotion) together wtih [twin.macro](https://github.com/ben-rogerson/twin.macro) which allows us to only load the required styles using tailwind utility classes on the component you're working with. In return, the file size gets smaller.

Read more on [twin.macro](https://github.com/ben-rogerson/twin.macro) for specific usage examples.

## License

MIT

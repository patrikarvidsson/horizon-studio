# Studio

Studio is a complement to <a href="https://patrikarvidsson.com">patrikarvidsson.com</a> which lists commercial projects. It is a lightweight website built with <a href="https://nextjs.org/">NextJS</a> and a few additional packages, hosted on <a href="https://vercel.com/">Vercel</a>.

## Notable features

In addition to nextjs, the codebase utilizes several packages.

- <a href="https://emotion.sh/">Emotion</a> — Styled-components alternative.
- <a href="https://tailwindcss.com/">Tailwind</a> — Utility-first CSS framework.
- <a href="https://github.com/ben-rogerson/twin.macro">twin.macro</a> — Combines Emotion and Tailwind.
- <a href="https://www.framer.com/motion/">Framer Motion</a> — Used for various animations.
- <a href="https://github.com/idiotWu/react-smooth-scrollbar">reat-smooth-scrollbar</a> — Smooth scrollbar support.
- <a href="https://github.com/hashicorp/next-mdx-remote">next-mdx-remote</a> — MDX-support for Next.
- <a href="https://github.com/garmeeh/next-seo">next-seo</a> — SEO-support for Next.

## Get started

Clone project

`git clone https://github.com/patrikarvidsson/horizon-studio`
`cd horizon-studio`

Install packages

`yarn`

## Usage

Start development server

`yarn dev`

Build site

`yarn build`

## Details

### Why use Tailwind or Emotion?

TailwindCSS is really great. If you used [Tachyons](https://tachyons.io/) before, you know how amazing utility first CSS can be compared to CSS framework like [Bootstrap](http://getbootstrap.com/).

If you haven't tried a utility first CSS before, I urge you to give it a try. Tailwind is a great place to start, and it's more customizable than Tachyons.

But, because [Tailwind CSS](https://tailwindcss.com) gives you alot of class as utilities the file gets bloated very quickly. Most developers solve this by using something like [purgeCSS](https://github.com/FullHuman/purgecss) and while it's awesome on it's own you still get into the habit of loading styles the current page doesn't need.

[More information on how you can control file size](https://tailwindcss.com/docs/controlling-file-size)

We use [Emotion](https://github.com/emotion-js/emotion) because it's equally awesome. CSS-in-JS allows you to only load the required styles for the particular page you're on, by defining this as CSS-in-JS. In return, each page CSS footprint is smaller than the magic purgeCSS can do on it's own.

### So how do I use it?

```javascript
import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  ${tw`py-8`};
`
const Text = styled.p`
  ${tw`bg-black text-white`};
`

const Home = () => (
  <Container>
    <Text>I am Text component made with Tailwind CSS + EmotionJS</Text>
  </Container>
)

export default Home
```

Furthermore, CSS-in-JS is awesome. [CSS in JS: Benefits, Drawbacks, and Tooling](https://objectpartners.com/2017/11/03/css-in-js-benefits-drawbacks-and-tooling/)

import React, { useEffect } from 'react';
import Scrollbar from 'react-smooth-scrollbar';
import tw, { css } from 'twin.macro';

import { motion, AnimatePresence } from 'framer-motion';

import { SEO, Header, Footer } from './';

const Layout = ({ title, description, children }) => {
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    const { scrollbar } = scrollRef.current;

    scrollbar.addListener(({ offset }) => {
      var fixed = document.getElementsByClassName('fixed');
      var slowDown = document.querySelector('div.slowDown');
      var fadeOut = document.querySelector('div.fadeOut');

      for (var i = 0; i < fixed.length; i++) {
        fixed[i].style.transform = 'translateY(' + offset.y + 'px' + ')';
      }

      if (offset.y > 50) {
        document.querySelector('header').classList.add('header--scrolled');
      } else {
        document.querySelector('header').classList.remove('header--scrolled');
      }

      if (slowDown) {
        slowDown.style.transform = 'translateY(' + offset.y / 1.8 + 'px' + ')';
      }
      if (fadeOut) {
        fadeOut.style.opacity = 1 - offset.y / 600;
      }
    });
  }, []);

  useEffect(function onFirstMount() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren'
      }
    }
  };
  return (
    <motion.div initial="hidden" animate="visible" variants={list}>
      <SEO metaTitle={title} metaDescription={description} />
      <Scrollbar
        damping={0.1}
        alwaysShowTracks={false}
        ref={scrollRef}
        tw="lg:h-screen"
      >
        <Header />
        {children}
        <Footer />
      </Scrollbar>
    </motion.div>
  );
};

export default Layout;

import React, { useState } from 'react';
import App from 'next/app';
import axios from 'axios';
import GlobalStyle from '../styles/global';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import Newsletter from '../components/Newsletter/index';
import postContext from '../components/contexts/postContext';
import filterContext from '../components/contexts/filterContext';

function Filter({ children }) {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [singlePost, setSinglePost] = useState('');

  return (
    <filterContext.Provider
      value={{
        filter,
        setFilter,
        search,
        setSearch,
        singlePost,
        setSinglePost,
      }}
    >
      {children}
    </filterContext.Provider>
  );
}

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);

      return { pageProps };
    }

    const postsResponse = await axios.get(
      'http://www.mocky.io/v2/5be5e3fa2f000082000fc3f8'
    );
    const authorResponse = await axios.get(
      'http://www.mocky.io/v2/5be5e3ae2f00005b000fc3f6'
    );

    const allPosts = postsResponse.data.map(a =>
      Object.assign(
        a,
        authorResponse.data.find(b => b.id === a.metadata.authorId)
      )
    );

    let authors = allPosts.map(a => a.name);

    authors = authors.filter(
      (li, idx, self) => self.map(itm => itm + itm).indexOf(li + li) === idx
    );

    const lastPosts = allPosts.slice(0, 3).map(a => a);

    const lastPost = allPosts.slice(0, 1).map(a => a)[0];

    const spotLight = allPosts.slice(0, 1).map(a => a)[0];

    return {
      pageProps,
      allPosts,
      authors,
      lastPosts,
      lastPost,
      spotLight,
    };
  }

  render() {
    const {
      Component,
      pageProps,
      allPosts,
      authors,
      lastPosts,
      lastPost,
      spotLight,
    } = this.props;

    return (
      <>
        <GlobalStyle />
        <Filter>
          <postContext.Provider
            value={{
              allPosts,
              authors,
              lastPosts,
              lastPost,
              spotLight,
            }}
          >
            <Header />
            <Component {...pageProps} />
            <Newsletter />
            <Footer />
          </postContext.Provider>
        </Filter>
      </>
    );
  }
}

import Head from 'next/head';

import Nav from 'components/Nav';
import Main from 'components/Main';
import Footer from 'components/Footer';

import styles from './Layout.module.scss';

const Layout = ({ children, displayNav = true }) => {
  return (
    <div className={styles.layoutContainer}>
      <Head>
        <title>Space Jelly Shop</title>
        <meta property="og:title" content="Space Jelly Shop" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Space Jelly Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      { displayNav && <Nav />}

      <Main>{ children }</Main>

      <Footer />
    </div>
  )
}

export default Layout;
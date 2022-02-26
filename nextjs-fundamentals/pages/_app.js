
import Head from 'next/head';
import Script from 'next/script';
import { Fragment } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import '../styles/globals.css'
import '../styles/layout.css';

const AppMain = ({ Component, pageProps }) => {

  if (Component.getLayout) {
    return (

      <>
        <Head>
          <link rel="stylesheet" href="/assets/css/all.min.css" />
          <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />
          <link rel="stylesheet" href="/assets/css/responsive.css" />
          <link rel="stylesheet" href="/assets/css/feedback.css" />
        </Head>
        {Component.getLayout(<Component {...pageProps} />)}

        <Script type="text/javascript" src="/assets/js/bootstrap.js" />
        <Script type="text/javascript" src="/assets/js/pro.min.js" />
      </>


    )

  }

  return (
    <Fragment>
       <Head>
          <link rel="stylesheet" href="/assets/css/all.min.css" />
          <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />
          <link rel="stylesheet" href="/assets/css/responsive.css" />
          <link rel="stylesheet" href="/assets/css/feedback.css" />
        </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />

      <Script type="text/javascript" src="/assets/js/bootstrap.js" />
      <Script type="text/javascript" src="/assets/js/pro.min.js" />
    </Fragment>
  )
}

export default AppMain

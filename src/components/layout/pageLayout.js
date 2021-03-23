import React from "react";
import Header from './header';
import Footer from './footer';
import {Helmet} from 'react-helmet';

const PageLayout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default PageLayout;

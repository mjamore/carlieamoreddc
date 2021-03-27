import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import HeaderNavigation from './headerNavigation';
import Header from './header';
import Footer from './footer';

const PageLayout = ({ children }) => (
  <div>
    <Helmet>
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' media='all' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <html lang='en' />
    </Helmet>
    <HeaderNavigation />
    <Header />
    {children}
    <Footer />
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;

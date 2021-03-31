import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import HeaderNavigation from './headerNavigation';
import Header from './header';
import Footer from './footer';

// Typescript declarations
interface PageLayoutProps {
  /**
   * The React components that you want rendered as children, nested inside of the PageLayout component
   */
  children: ReactElement;
}

const PageLayout = ({ children }: PageLayoutProps): ReactElement => (
  <div>
    <Helmet>
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' media='all' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <html lang='en' />
    </Helmet>
    <HeaderNavigation />
    <Header />
    {children}
    <Footer />
  </div>
);

export default PageLayout;

import React, { ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import HeaderNavigation from './headerNavigation';
import Header from './header';
import Footer from './footer';

// Typescript declarations
interface PageLayoutProps {
  children: ReactNode;
  fullWidth: boolean;
}

const PageLayout = ({ children, fullWidth }: PageLayoutProps): ReactElement => {
  const classNames = fullWidth ? 'null' : 'max-w-page mx-auto px-5';
  return (
    <div>
      <Helmet>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' media='all' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <html lang='en' />
      </Helmet>
      <HeaderNavigation />
      <Header />
      <div className={classNames}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
};

PageLayout.defaultProps = {
  fullWidth: false,
};

export default PageLayout;

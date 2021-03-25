import * as React from 'react';
import Logo from './logo';
import Navigation from './headerNavigation';
import * as styles from './header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Logo />
    <Navigation />
  </header>
);

export default Header;

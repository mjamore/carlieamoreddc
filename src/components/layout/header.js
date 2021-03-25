import * as React from 'react';
import Logo from './logo';
import Navigation from './headerNavigation';
import * as styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation></Navigation>
    </header>
  )
}

export default Header;

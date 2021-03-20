import * as React from 'react';
import * as styles from './header.module.css';
import Navigation from './navigation';
import Logo from './logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation></Navigation>
    </header>
  )
}

export default Header;

import * as React from 'react';
import * as styles from './header.module.css';
import Navigation from './navigation';

const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation></Navigation>
    </header>
  )
}

export default Header;

import * as React from 'react';
import Logo from './logo';
import HeaderNavigation from './headerNavigation';
import { header } from './header.module.css';

const Header = () => (
  <header className={header}>
    <Logo />
    <HeaderNavigation />
  </header>
);

export default Header;

import * as React from 'react';
import Logo from './logo';
import { header } from './header.module.css';

const Header = () => (
  <header className={header}>
    <Logo />
  </header>
);

export default Header;

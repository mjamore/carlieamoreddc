import * as React from 'react';
import Logo from './logo';
import Navigation from './headerNavigation';
import { header } from './header.module.css';

const Header = () => (
  <header>
    <Logo />
    <Navigation />
  </header>
);

export default Header;

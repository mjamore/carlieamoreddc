import * as React from 'react';
import { slide as Menu } from 'react-burger-menu';
import headerNavigation from './headerNavigation';

const HamburgerMenu = () => (
  <Menu className='my-menu' right disableAutoFocus>
    {headerNavigation}
  </Menu>
);

export default HamburgerMenu;

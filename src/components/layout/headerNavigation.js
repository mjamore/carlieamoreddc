import * as React from 'react';
import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';
import navigationLinks from '../../data/navigationLinks';
import { navigationItemLink } from './headerNavigation.module.css';

const HeaderNavigation = () => {
  const navigationItems = navigationLinks.map((navigationLink) => (
    <Link
      key={navigationLink.href}
      to={navigationLink.href}
      className={navigationItemLink}
    >
      {navigationLink.text}
    </Link>
  ));

  return (
    <Menu right disableAutoFocus>
      {navigationItems}
    </Menu>
  );
};

export default HeaderNavigation;

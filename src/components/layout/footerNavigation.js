import * as React from 'react';
import { Link } from 'gatsby';
import navigationLinks from '../../data/navigationLinks';
import { navigation, navigationItemLink } from './footerNavigation.module.css';

const FooterNavigation = () => {
  const navigationItems = navigationLinks.map((navigationItem) => (
    <li key={navigationItem.href}>
      <Link
        to={navigationItem.href}
        className={navigationItemLink}
      >
        {navigationItem.text}
      </Link>
    </li>
  ));

  return (
    <ul className={navigation}>
      {navigationItems}
    </ul>
  );
};

export default FooterNavigation;

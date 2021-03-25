import * as React from 'react';
import { useState } from 'react';
import { Link } from 'gatsby';
import navigationLinks from '../../data/navigationLinks';
import {
  navigation,
  navigationItem,
  navigationItemLink,
  icon,
  topnav,
  responsive,
} from './headerNavigation.module.css';

const HeaderNavigation = () => {
  const [isResponsive, setIsResponsive] = useState(0);

  const toggleIsResponsive = () => {
    setIsResponsive(!isResponsive);
  };

  const navigationItems = navigationLinks.map((navigationLink) => (
    <li key={navigationLink.href} className={navigationItem}>
      <Link
        to={navigationLink.href}
        className={navigationItemLink}
      >
        {navigationLink.text}
      </Link>
    </li>
  ));

  return (
    <ul className={`${navigation} ${isResponsive ? `${topnav} ${responsive}` : `${topnav}`}`}>
      {navigationItems}
      <li className={navigationItem}>
        <button className={`${icon}`} type='button' aria-label='navigation hamburger menu button' onClick={toggleIsResponsive}>
          <i className='fa fa-bars' />
        </button>
      </li>
    </ul>
  );
};

export default HeaderNavigation;

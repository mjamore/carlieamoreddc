import * as React from 'react';
import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';
import ContactForm from '../contactForm';
import navigationLinks from '../../data/navigationLinks';
import { spacedSection } from '../globalStyles.module.css';
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
      <ContactForm className={spacedSection} />
    </Menu>
  );
};

export default HeaderNavigation;

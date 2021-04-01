import React, { ReactElement } from 'react';
import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';
import ContactForm from '../forms/contactForm';
import navigationLinks from '../../data/navigationLinks';

// Typescript declarations
interface NavigationLink {
  href: string;
  text: string;
}

const HeaderNavigation = (): ReactElement => {
  const navigationItems = navigationLinks.map((navigationLink: NavigationLink): ReactElement => (
    <Link
      key={navigationLink.href}
      to={navigationLink.href}
      className='block hover:text-black no-underline p-3 text-base text-font-color text-left w-full'
    >
      {navigationLink.text}
    </Link>
  ));

  return (
    <Menu right disableAutoFocus>
      {navigationItems}
      <ContactForm className='my-8 w-full' />
    </Menu>
  );
};

export default HeaderNavigation;

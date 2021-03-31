import React, { ReactElement } from 'react';
import { Link } from 'gatsby';
import navigationLinks from '../../data/navigationLinks';

// Typescript declarations
interface NavigationItem {
  href: string;
  text: string;
}

const FooterNavigation = (): ReactElement => {
  const navigationItems = navigationLinks.map((navigationItem: NavigationItem): ReactElement => (
    <li key={navigationItem.href}>
      <Link
        to={navigationItem.href}
        className='hover:text-black inline-block no-underline p-4 text-base text-font-color'
      >
        {navigationItem.text}
      </Link>
    </li>
  ));

  return (
    <ul className='list-none mb-9 md:mb-0 text-left tracking-tight uppercase'>
      {navigationItems}
    </ul>
  );
};

export default FooterNavigation;

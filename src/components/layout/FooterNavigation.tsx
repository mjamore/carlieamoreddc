import React, { ReactElement } from 'react';
import NavigationItems from './NavigationItems';

const FooterNavigation = (): ReactElement => (
  <ul className='list-none max-w-xs mb-9 text-left tracking-tight uppercase w-full lg:mb-0'>
    <NavigationItems />
  </ul>
);

export default FooterNavigation;

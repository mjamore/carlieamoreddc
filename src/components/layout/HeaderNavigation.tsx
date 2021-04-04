import React, { ReactElement } from 'react';
import { slide as Menu } from 'react-burger-menu';
import NavigationItems from './NavigationItems';
import ContactForm from '../forms/ContactForm';

const HeaderNavigation = (): ReactElement => (
  <Menu right disableAutoFocus>
    <NavigationItems />
    <ContactForm className='w-full' />
  </Menu>
);

export default HeaderNavigation;

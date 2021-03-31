import React, { ReactElement } from 'react';
import Logo from './logo';

const Header = (): ReactElement => (
  <header className='bg-aliceblue flex items-center px-3 py-4 relative shadow-container z-10'>
    <Logo />
  </header>
);

export default Header;

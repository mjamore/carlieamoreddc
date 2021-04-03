import React, { ReactElement } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Logo = (): ReactElement => (
  <Link to='/' className='flex items-center no-underline text-black'>
    <StaticImage
      src='../../images/logos/heart-tooth.png'
      alt='Heart tooth logo'
      placeholder='blurred'
      width={40}
    />
    <h2 className='ml-3 text-2xl'>Dr. Carlie Amore, DDS</h2>
  </Link>
);

export default Logo;

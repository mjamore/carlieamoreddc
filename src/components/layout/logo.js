import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { logoLink } from './logo.module.css';

const Logo = () => (
  <Link to='/' className={logoLink}>
    <StaticImage
      src='../../images/logos/heart-tooth.png'
      alt='Heart tooth logo'
      placeholder='blurred'
      width={40}
    />
    <h2>Dr. Carlie Amore, DDS</h2>
  </Link>
);

export default Logo;

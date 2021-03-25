import * as React from 'react';
import { Link } from 'gatsby';
import { logoLink } from './logo.module.css';

const Logo = () => (
  <Link to='/' className={logoLink}>
    <h2>Dr. Carlie Amore, DDS</h2>
  </Link>
);

export default Logo;

import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from './logo.module.css';


const Logo= () => {
  return (
    <Link to="/" className={styles.logoStyle}>
      <h2>Dr. Carlie Amore, DDS</h2>
    </Link>
  );
}

export default Logo;

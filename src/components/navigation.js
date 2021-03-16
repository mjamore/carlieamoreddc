import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from './navigation.module.css';

const Navigation = () => {
  return (
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" className={styles.navigationItemLink}>Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/about-me/" className={styles.navigationItemLink}>About Me</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/services/" className={styles.navigationItemLink}>Services</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/broadmoor-holistic-dentistry/" className={styles.navigationItemLink}>Broadmoor Holistic Dentistry</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/contact-me/" className={styles.navigationItemLink}>Contact Me</Link>
      </li>
    </ul>
  )
}

export default Navigation
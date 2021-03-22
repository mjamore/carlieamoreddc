import * as React from 'react';
import {useState} from 'react';
import { Link } from 'gatsby';
import * as styles from './navigation.module.css';

const Navigation = () => {
  const [isResponsive, setIsResponsive] = useState(0);

  const toggleIsResponsive = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <ul className={`${styles.navigation} ${isResponsive ? `${styles.topnav} ${styles.responsive}` : `${styles.topnav}`}`}>
      <li className={styles.navigationItem}>
        <Link to='/' className={styles.navigationItemLink}>Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to='/education/' className={styles.navigationItemLink}>Education</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to='/services/' className={styles.navigationItemLink}>Services</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to='/broadmoor-holistic-dentistry/' className={styles.navigationItemLink}>Broadmoor Holistic Dentistry</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to='/contact-me/' className={styles.navigationItemLink}>Contact Me</Link>
      </li>
      <li className={styles.navigationItem}>
        <button className={`${styles.icon}`} onClick={toggleIsResponsive}>
          <i className={'fa fa-bars'}></i>
        </button>
      </li>
    </ul>
  )
}

export default Navigation
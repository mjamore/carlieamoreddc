import * as React from 'react';
import {useState} from 'react';
import { Link } from 'gatsby';
import navigationLinks from '../../data/navigationLinks';
import * as styles from './navigation.module.css';

const Navigation = () => {
  const [isResponsive, setIsResponsive] = useState(0);

  const toggleIsResponsive = () => {
    setIsResponsive(!isResponsive);
  };

  const navigationItems = navigationLinks.map((navigationItem, index) => {
    return (
      <li key={index} className={styles.navigationItem}>
        <Link to={navigationItem.href} className={styles.navigationItemLink}>{navigationItem.text}</Link>
      </li>
    );
  });

  return (
    <ul className={`${styles.navigation} ${isResponsive ? `${styles.topnav} ${styles.responsive}` : `${styles.topnav}`}`}>
      {navigationItems}
      <li className={styles.navigationItem}>
        <button className={`${styles.icon}`} aria-label='navigation hamburger menu button' onClick={toggleIsResponsive}>
          <i className={'fa fa-bars'}></i>
        </button>
      </li>
    </ul>
  )
}

export default Navigation
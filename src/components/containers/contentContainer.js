import * as React from 'react';
import * as styles from './contentContainer.module.css';

const contentContainer = ({ children }) => {
  return (
    <div className={styles.contentContainer}>
      {children}
    </div>
  );
};

export default contentContainer;
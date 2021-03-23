import * as React from 'react';
import * as styles from './flexboxDiv.module.css'

const FlexboxDiv = ({ children }) => {
  return (
    <div className={styles.flexbox}>
      {children}
    </div>
  );
};

export default FlexboxDiv;

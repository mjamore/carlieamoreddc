import * as React from 'react';
import * as styles from './card.module.css';

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <h3>{props.cardTitle}</h3>
      </div>
      <div className={styles.cardBody}>
        <p>{props.cardBody}</p>
      </div>
    </div>
  );
};

export default Card;

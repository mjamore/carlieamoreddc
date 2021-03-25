import * as React from 'react';
import PropTypes from 'prop-types';
import {
  card,
  cardTitleStyle,
  cardTitleHeading,
  cardBodyStyle,
} from './card.module.css';

const Card = (props) => {
  const { cardTitle, cardBody } = props;
  return (
    <div className={card}>
      <div className={cardTitleStyle}>
        <h3 className={cardTitleHeading}>{cardTitle}</h3>
        <hr />
      </div>
      <div className={cardBodyStyle}>
        <p>{cardBody}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardTitle: PropTypes.node.isRequired,
  cardBody: PropTypes.node.isRequired,
};

export default Card;

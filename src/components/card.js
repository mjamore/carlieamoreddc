import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  children,
  heading,
  subHeading,
  description,
  maxWidth,
}) => (
  <div className={`border-4 border-green flex flex-col items-center justify-center ${maxWidth} mx-auto my-10 p-3 shadow`}>
    {children}
    <h4 className='my-3 text-lg'>{heading}</h4>
    <h5 className='my-2'>{subHeading}</h5>
    <hr className='my-3 w-full' />
    <p className='m-3 text-center'>{description}</p>
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  description: PropTypes.string,
  maxWidth: PropTypes.string,
};

Card.defaultProps = {
  heading: '',
  subHeading: '',
  description: '',
  maxWidth: 'max-w-md',
};

export default Card;

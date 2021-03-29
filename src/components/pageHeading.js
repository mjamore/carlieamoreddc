import React from 'react';
import PropTypes from 'prop-types';

const PageHeading = (props) => {
  const { headingText } = props;
  return (
    <h1 className='my-12 text-3xl text-center'>{headingText}</h1>
  );
};

PageHeading.propTypes = {
  headingText: PropTypes.node.isRequired,
};

export default PageHeading;

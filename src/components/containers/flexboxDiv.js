import * as React from 'react';
import PropTypes from 'prop-types';

const FlexboxDiv = ({ children }) => (
  <div>
    {children}
  </div>
);

FlexboxDiv.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FlexboxDiv;

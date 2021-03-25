import * as React from 'react';
import PropTypes from 'prop-types';
import { flexboxDiv } from './flexboxDiv.module.css';

const FlexboxDiv = ({ children }) => (
  <div className={flexboxDiv}>
    {children}
  </div>
);

FlexboxDiv.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FlexboxDiv;

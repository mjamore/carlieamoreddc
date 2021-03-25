import * as React from 'react';
import PropTypes from 'prop-types';
import { contentContainer } from './contentContainer.module.css';

const ContentContainer = ({ children }) => (
  <div className={contentContainer}>
    {children}
  </div>
);

ContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentContainer;

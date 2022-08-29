import React from 'react';
import PropTypes from 'prop-types';

import './badge.scss';

const Badge = ({ children }) => (
  <div type="Badge" className="Badge">
    {children}
  </div>
);

Badge.propTypes = {
  children: PropTypes.node,
};

Badge.defaultProps = {
  children: '',
};

export default Badge;

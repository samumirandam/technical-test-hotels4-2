import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './button.scss';

const Button = ({ children, className, onClick }) => (
  <button
    type="button"
    className={classnames('Button', className)}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  children: '',
  className: '',
};

export default Button;

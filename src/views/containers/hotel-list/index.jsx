import React from 'react';
import PropTypes from 'prop-types';

import './hotel-list.scss';

const HotelList = ({ children }) => (
  <section className="HotelList">{children}</section>
);

HotelList.propTypes = {
  children: PropTypes.node,
};

HotelList.defaultProps = {
  children: '',
};

export default HotelList;

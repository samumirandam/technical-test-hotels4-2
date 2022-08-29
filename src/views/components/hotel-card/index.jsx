import React from 'react';
import PropTypes from 'prop-types';

import './hotel-card.scss';

const HotelCard = ({
  image,
  name,
  pricePerDay,
  totalPrice,
  raiting,
  opinions,
}) => (
  <div className="HotelCard">
    <figure>
      <img src={image} alt={name} />
    </figure>
    <p>{name}</p>
    <p>{pricePerDay}</p>
    <p>{totalPrice}</p>
    <p>{raiting}</p>
    <p>{opinions}</p>
    <p>totalmente rembosable</p>
    <p>acumula sellos</p>
    <p>precio secreto</p>
  </div>
);

HotelCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  pricePerDay: PropTypes.string,
  totalPrice: PropTypes.string,
  raiting: PropTypes.string,
  opinions: PropTypes.string,
};

HotelCard.defaultProps = {
  image: '',
  name: '',
  pricePerDay: '',
  totalPrice: '',
  raiting: '',
  opinions: '',
};

export default HotelCard;

/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';

import Button from '@ui/button';
import Badge from '@ui/badge';

import './hotel-card.scss';

const HotelCard = ({
  id,
  image,
  name,
  pricePerDay,
  pricePerDayInfo,
  totalPrice,
  raiting,
  opinions,
  badges,
}) => (
  <div className="HotelCard">
    <figure>
      <img src={image} alt={name} />
    </figure>
    <div className="HotelCard__content">
      <div>
        <p className="HotelCard__title">{name}</p>
        <div className="HotelCard__price-container">
          <p className="HotelCard__price">{pricePerDay}</p>
          <p className="HotelCard__price-info">{pricePerDayInfo}</p>
        </div>
        <p className="HotelCard__total-price">{totalPrice}</p>
        <div className="HotelCard__raiting-container">
          <p className="HotelCard__raiting">{raiting}</p>
          <p className="HotelCard__opinions">{opinions}</p>
        </div>
        <div className="HotelCard__badges">
          {badges.map((badge, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Badge key={`badge-${id}-${index}`}>{badge}</Badge>
          ))}
        </div>
      </div>
      <Button onClick={() => {}} className="HotelCard__secret-price">
        Secret price available
      </Button>
    </div>
  </div>
);

HotelCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string,
  name: PropTypes.string,
  pricePerDay: PropTypes.string,
  pricePerDayInfo: PropTypes.string,
  totalPrice: PropTypes.string,
  raiting: PropTypes.string,
  opinions: PropTypes.string,
  badges: PropTypes.arrayOf(PropTypes.string),
};

HotelCard.defaultProps = {
  image: '',
  name: '',
  pricePerDay: '',
  pricePerDayInfo: '',
  totalPrice: '',
  raiting: '',
  opinions: '',
  badges: [],
};

export default HotelCard;

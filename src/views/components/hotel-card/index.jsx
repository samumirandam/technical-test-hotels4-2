import React from 'react';

import './hotel-card.scss';

const HotelCard = () => (
  <div className="HotelCard">
    <figure>
      <img src="https://picsum.photos/1200/800" alt="" />
    </figure>
    <p>name</p>
    <p>precio por dia</p>
    <p>precio total</p>
    <p>puntuacion</p>
    <p>totalmente rembosable</p>
    <p>acumula sellos</p>
    <p>precio secreto</p>
  </div>
);

export default HotelCard;

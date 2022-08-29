/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getHotelListAction } from '@actions';

import './home.scss';

const Home = () => {
  const dispatch = useDispatch();

  const hotelList = useSelector((state) => state.hotelList.data);

  useEffect(() => {
    const payload = {};
    dispatch(getHotelListAction(payload));
  }, []);

  return (
    <section className="Home" data-testid="Home">
      {hotelList && hotelList.map((hotel) => <p>Hotel</p>)}
    </section>
  );
};

export default Home;

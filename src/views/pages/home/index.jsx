/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getHotelListAction } from '@actions';

import SearchResults from '@components/search-results';

import './home.scss';

const Home = () => {
  const dispatch = useDispatch();

  const hotelList = useSelector((state) => state.hotelList.data);
  const destination = useSelector((state) => state.hotelList.destination);
  const totalCount = useSelector((state) => state.hotelList.totalCount);

  const { destinationId, pageNumber, pageSize, checkIn, checkOut, adults1 } =
    useParams();

  console.log(
    '🚀 ~ file: index.jsx ~ line 17 ~ Home ~ adults1',
    destinationId,
    pageNumber,
    pageSize,
    checkIn,
    checkOut,
    adults1
  );

  useEffect(() => {
    const payload = {};
    dispatch(getHotelListAction(payload));
  }, []);

  return (
    <section className="Home" data-testid="Home">
      <SearchResults
        destination={destination}
        adults={adults1}
        checkIn={checkIn}
        checkOut={checkOut}
        pageSize={pageSize}
        totalResults={totalCount}
      />
      {hotelList && hotelList.map((hotel, index) => <p key={index}>Hotel</p>)}
    </section>
  );
};

export default Home;

/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { getHotelListAction } from '@actions';

import HotelList from '@containers/hotel-list';

import SearchResults from '@components/search-results';
import Loader from '@components/loader';
import Error from '@components/error';
import HotelCard from '@components/hotel-card';

import './home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    destinationId, pageNumber, pageSize, checkIn, checkOut, adults1,
  } = useParams();

  const hotelList = useSelector((state) => state.hotelList?.data);
  const destination = useSelector((state) => state.hotelList?.destination);
  const totalCount = useSelector((state) => state.hotelList?.totalCount);
  const isLoading = useSelector((state) => state.hotelList?.isLoading);
  const isError = useSelector((state) => state.hotelList?.isError);
  const errorDetail = useSelector((state) => state.hotelList?.errorDetail);

  useEffect(() => {
    if (
      !(
        destinationId
        || pageNumber
        || pageSize
        || checkIn
        || checkOut
        || adults1
      )
    ) {
      navigate(
        '/destinationId/1506246/pageNumber/1/pageSize/12/checkIn/2022-10-10/checkOut/2022-10-15/adults1/1',
        { replace: true },
      );
    }
  }, [destinationId, pageNumber, pageSize, checkIn, checkOut, adults1]);

  useEffect(() => {
    const payload = {
      destinationId,
      pageNumber,
      pageSize,
      checkIn,
      checkOut,
      adults1,
    };
    dispatch(getHotelListAction(payload));
  }, [destinationId, pageNumber, pageSize, checkIn, checkOut, adults1]);

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
      <HotelList>
        {hotelList
          && hotelList.map((hotel) => (
            <HotelCard
              key={hotel.id}
              image={hotel.optimizedThumbUrls?.srpDesktop}
              name={hotel.name}
              pricePerDay={hotel.ratePlan?.price?.current}
              totalPrice={hotel.ratePlan?.price?.fullyBundledPricePerStay}
              raiting={`${hotel.guestReviews?.rating}/${hotel.guestReviews?.scale}`}
              opinions={hotel.guestReviews?.total}
            />
          ))}
      </HotelList>
      {isLoading && <Loader />}
      {isError && <Error error={errorDetail} />}
    </section>
  );
};

export default Home;

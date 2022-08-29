import React from 'react';
import PropTypes from 'prop-types';

import './search-results.scss';

const SearchResults = ({
  destination,
  adults,
  checkIn,
  checkOut,
  pageSize,
  totalResults,
}) => (
  <div className="SearchResults">
    <h1 className="SearchResults__title">
      Hoteles en:
      {' '}
      {destination}
      {' '}
    </h1>
    {adults && (
    <p className="SearchResults__people">
      Para
      {' '}
      {adults}
      {' '}
      personas
    </p>
    )}
    {checkIn && checkOut && (
      <div className="SearchResults__dates">
        <p>Check in:</p>
        <p>{checkIn}</p>
        <p>Check out:</p>
        <p>{checkOut}</p>
      </div>
    )}
    <p />
    {pageSize && totalResults && (
      <p className="SearchResults__results">
        {pageSize}
        {' '}
        de
        {' '}
        {totalResults}
        {' '}
        resultados
      </p>
    )}
  </div>
);

SearchResults.propTypes = {
  destination: PropTypes.string,
  adults: PropTypes.string,
  checkIn: PropTypes.string,
  checkOut: PropTypes.string,
  pageSize: PropTypes.string,
  totalResults: PropTypes.string,
};

SearchResults.defaultProps = {
  destination: '',
  adults: '',
  checkIn: '',
  checkOut: '',
  pageSize: '',
  totalResults: '',
};

export default SearchResults;

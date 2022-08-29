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
      Hotels in:
      {' '}
      {destination}
      {' '}
    </h1>
    {adults && (
    <p className="SearchResults__people">
      For
      {' '}
      {adults}
      {' '}
      persons
    </p>
    )}
    <p className="SearchResults__date">
      Check in:
      {' '}
      {checkIn}
    </p>
    <p className="SearchResults__date">
      Check out:
      {' '}
      {checkOut}
    </p>
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
  totalResults: PropTypes.number,
};

SearchResults.defaultProps = {
  destination: '',
  adults: '',
  checkIn: '',
  checkOut: '',
  pageSize: '',
  totalResults: 0,
};

export default SearchResults;

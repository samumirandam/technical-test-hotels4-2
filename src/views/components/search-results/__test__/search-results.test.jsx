/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen } from '@utils/test-utils';

import SearchResults from '../index';

const defaultProps = {};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<SearchResults {...setupStore} />, {});
};

describe('Test for SearchResults component', () => {
  test('Should render without errors', () => {
    setup();
    expect(screen.getByText('Hotels in:')).toBeTruthy();
  });

  test('Should renders the same component', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('Should render with data', () => {
    const props = {
      destination: 'destinationTest',
      adults: '1',
      checkIn: '11-11-2022',
      checkOut: '15-11-2022',
      pageSize: '1',
      totalResults: '1',
    };
    setup(props);
    expect(screen.getByText(`Hotels in: ${props.destination}`)).toBeTruthy();
    expect(screen.getByText(`For ${props.adults} persons`)).toBeTruthy();
  });
});

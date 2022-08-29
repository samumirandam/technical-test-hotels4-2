/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { render, screen } from '@utils/test-utils';

import Home from '../index';

const defaultProps = {};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<Home {...setupStore} />, {});
};

describe('Test for Home page component', () => {
  test('Should render without errors', () => {
    setup();
    expect(screen.getByText('Hotels in:')).toBeTruthy();
  });

  test('Should renders the same component', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('Should render hotel list without errors', () => {
    const props = {
      hotelList: {
        data: [{ name: 'hotel1' }],
      },
    };
    setup(props);
    expect(screen.getByText('Hotels in:')).toBeTruthy();
  });

  test('Should render loading state', () => {
    const props = {
      hotelList: {
        isLoading: true,
      },
    };
    setup(props);
    expect(screen.getByTestId('Loader')).toBeTruthy();
  });

  test('Should render error state', () => {
    const props = {
      hotelList: {
        isError: true,
        errorDetail: 'test error',
      },
    };
    setup(props);
    expect(screen.getByText('test error')).toBeTruthy();
  });
});

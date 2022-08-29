/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen, fireEvent } from '@utils/test-utils';

import HotelCard from '../index';

const defaultProps = {};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<HotelCard {...setupStore} />, {});
};

describe('Test for HotelCard component', () => {
  test('Should render without errors', () => {
    setup();
    expect(screen.getByText('Secret price available')).toBeTruthy();
  });

  test('Should renders the same component', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('Should render click in secret price', () => {
    setup();
    fireEvent.click(screen.getByText('Secret price available'));
    expect(screen.getByText('Secret price available')).toBeTruthy();
  });
});

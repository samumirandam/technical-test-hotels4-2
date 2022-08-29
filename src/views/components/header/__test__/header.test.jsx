/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen, fireEvent } from '@utils/test-utils';

import Header from '../index';

const defaultProps = {};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<Header {...setupStore} />, {});
};

describe('Test for Header component', () => {
  test('Should render without errors', () => {
    setup();
    expect(screen.getByText('Iniciar sesión')).toBeTruthy();
  });

  test('Should renders the same component', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('Should render click in login', () => {
    setup();
    fireEvent.click(screen.getByText('Iniciar sesión'));
    expect(screen.getByText('Iniciar sesión')).toBeTruthy();
  });
});

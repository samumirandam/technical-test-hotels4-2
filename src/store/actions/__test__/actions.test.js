import * as actions from '../index';

import {
  GET_HOTEL_LIST_LOADING,
  GET_HOTEL_LIST_SUCCESS,
  GET_HOTEL_LIST_ERROR,
} from '../types';

describe('Test for Actions', () => {
  test('Should call getHotelListSteps request', () => {
    const expected = {
      type: GET_HOTEL_LIST_LOADING,
    };
    expect(actions.getHotelListSteps.request()).toEqual(expected);
  });

  test('Should call getHotelListSteps success', () => {
    const payload = {
      data: {
        data: {
          body: true,
        },
      },
    };
    const expected = {
      type: GET_HOTEL_LIST_SUCCESS,
      payload: payload.data.data.body,
    };
    expect(actions.getHotelListSteps.success(payload)).toEqual(expected);
  });

  test('Should call getHotelListSteps error', () => {
    const payload = 'test';
    const expected = {
      type: GET_HOTEL_LIST_ERROR,
      payload,
    };
    expect(actions.getHotelListSteps.error(payload)).toEqual(expected);
  });

  test('Should call getHotelListAction', () => {
    const payload = {
      api: 'test',
    };
    const dispatch = jest.fn();
    actions.getHotelListAction(payload)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

/* eslint-disable import/no-unresolved */
import {
  GET_HOTEL_LIST_LOADING,
  GET_HOTEL_LIST_SUCCESS,
  GET_HOTEL_LIST_ERROR,
} from '@actions/types';
import reducer, { initialState } from '../index';

describe('Test for Reducers', () => {
  test('Should return default state', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('Should return initial state', () => {
    expect(reducer(undefined, '')).toEqual(initialState);
  });

  test('Should get hotel list loading', () => {
    const payload = {};
    const action = {
      type: GET_HOTEL_LIST_LOADING,
      payload,
    };
    const expected = {
      ...initialState,
      hotelList: {
        ...initialState.hotelList,
        isLoading: true,
      },
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('Should get hotel list success', () => {
    const payload = {
      searchResults: {
        results: [],
      },
      header: 'test header',
      totalCount: 1,
    };
    const action = {
      type: GET_HOTEL_LIST_SUCCESS,
      payload,
    };
    const expected = {
      ...initialState,
      hotelList: {
        ...initialState.hotelList,
        isSucces: true,
        data: payload.searchResults.results,
        destination: payload.header,
        totalCount: payload.totalCount,
      },
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('Should get hotel list error', () => {
    const payload = {};
    const action = {
      type: GET_HOTEL_LIST_ERROR,
      payload,
    };
    const expected = {
      ...initialState,
      hotelList: {
        ...initialState.hotelList,
        isError: true,
        errorDetail: payload,
      },
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});

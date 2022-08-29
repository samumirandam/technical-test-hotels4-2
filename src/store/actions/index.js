// eslint-disable-next-line import/no-unresolved
import { getData } from '@api/get-data';

import {
  GET_HOTEL_LIST_LOADING,
  GET_HOTEL_LIST_SUCCESS,
  GET_HOTEL_LIST_ERROR,
} from './types';

export const getHotelListSteps = {
  request: () => ({
    type: GET_HOTEL_LIST_LOADING,
  }),
  success: (payload) => ({
    type: GET_HOTEL_LIST_SUCCESS,
    payload: payload.data.data.body,
  }),
  error: (error) => ({
    type: GET_HOTEL_LIST_ERROR,
    payload: error,
  }),
};

export const getHotelListAction = (payload) => (dispatch) => {
  getData(dispatch, getHotelListSteps, {
    method: `list?destinationId=${payload.destinationId}&pageNumber=${payload.pageNumber}&pageSize=${payload.pageSize}&checkIn=${payload.checkIn}&checkOut=${payload.checkOut}&adults1=${payload.adults1}`,
  });
};

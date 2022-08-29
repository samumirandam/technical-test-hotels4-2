import {
  GET_HOTEL_LIST_LOADING,
  GET_HOTEL_LIST_SUCCESS,
  GET_HOTEL_LIST_ERROR,
} from '@actions/types';

export const initialState = {
  hotelList: {
    isLoading: false,
    isSucces: false,
    isError: false,
    data: null,
    destination: '',
    totalCount: '',
    errorDetail: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOTEL_LIST_LOADING: {
      return {
        ...state,
        hotelList: {
          ...initialState.hotelList,
          isLoading: true,
        },
      };
    }
    case GET_HOTEL_LIST_SUCCESS: {
      return {
        ...state,
        hotelList: {
          ...initialState.hotelList,
          isSucces: true,
          data: action.payload.searchResults.results,
          destination: action.payload.header,
          totalCount: action.payload.totalCount,
        },
      };
    }
    case GET_HOTEL_LIST_ERROR: {
      return {
        ...state,
        hotelList: {
          ...initialState.hotelList,
          isError: true,
          errorDetail: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;

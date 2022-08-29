/* eslint-disable import/no-unresolved */
import axiosInstance from './config';

// eslint-disable-next-line import/prefer-default-export
export const getData = async (dispatch, steps, payload) => {
  dispatch(steps.request());
  try {
    const response = await axiosInstance.get(payload.method);
    if (response.data.result === 'ERROR') {
      throw new Error(response.data.error_message);
    }
    dispatch(steps.success(response));
  } catch (error) {
    dispatch(steps.error(error.message));
  }
};

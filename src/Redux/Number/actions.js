export const INCREMENT_NUMBER = 'INCREMENT_NUMBER';
export const DECREMENT_NUMBER = 'DECREMENT_NUMBER';
export const RESET_NUMBER ='RESET_NUMBER';

export const setNumberIncrement = number => dispatch => {
  dispatch({
    type: INCREMENT_NUMBER,
    payload: number,
  });
};

export const setNumberDecrement = number => dispatch => {
  dispatch({
    type: DECREMENT_NUMBER,
    payload: number,
  });
};

export const ResetNumber = () => dispatch => {
  dispatch({
    type: RESET_NUMBER,
    payload: {},
  });
};

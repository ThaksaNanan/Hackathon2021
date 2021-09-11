import { INCREMENT_NUMBER, DECREMENT_NUMBER, RESET_NUMBER } from './actions';

const initialState = {
  number: 0,
};

function numberReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_NUMBER:
      return { ...state, number: state.number + action.payload };
    case DECREMENT_NUMBER:
      return { ...state, number: state.number - action.payload };
    case RESET_NUMBER:
      return { ...state, number: 0 };
    default:
      return state;
  }
}

export default numberReducer;

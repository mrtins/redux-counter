import { INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_FIVE_COUNTER, RESET_COUNTER } from '../actions/actionsTypes';

const initialState = {
  count: 0,
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, count: state.count + 1 };

    case DECREMENT_COUNTER:
      return { ...state, count: state.count - 1 };

    case INCREMENT_FIVE_COUNTER:
      return { ...state, count: state.count + 5 };

    case RESET_COUNTER:
      return { ...state, count: 0 };

    default:
      return state;
  }
}
const INITIAL_STATE = [];

export default function number(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NUMBERS_SUCCESS':
      return action.payload.data;
    default:
      return state;
  }
}

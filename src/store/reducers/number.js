const INITIAL_STATE = [];

export default function number(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NUMBERS_SUCCESS':
      return [...state, action.payload.data];
    default:
      return state;
  }
}

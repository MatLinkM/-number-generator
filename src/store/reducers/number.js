const INITIAL_STATE = [{number: 555000555, cost: 1.55}];

export default function number(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NUMBERS_SUCCESS':
      return [action.payload.data];
    default:
      return state;
  }
}

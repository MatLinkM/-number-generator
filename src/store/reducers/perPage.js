const INITIAL_STATE = '100';

export default function page(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'PER_PAGE':
      if (state >= 0 && state <= 1000) {
        return state = action.payload.perPage;
      } else {
        return state;
      }
    default:
      return state;
  }
}

const INITIAL_STATE = 1;

export default function page(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEXT_PAGE':
      return state + action.payload.page;
    case 'PREV_PAGE':
      if (state > 1) {
        return state - action.payload.page;
      } else {
        return state;
      }
    default:
      return state;
  }
}

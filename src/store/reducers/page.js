const INITIAL_STATE = 1;

export default function page(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEXT_PAGE':
      state = Number(state) + action.payload.page;

      return state.toString();
    case 'PREV_PAGE':
      if (state > 1) {
        state = Number(state) - action.payload.page;

        return state.toString();
      } else {
        return state.toString();
      }
    default:
      return state.toString();
  }
}

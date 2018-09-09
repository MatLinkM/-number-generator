const INITIAL_STATE = {
  meta: {
    page: '1',
    perPage: '10',
    totalPages: '100'
  },
  data: []
};

export default function numbersList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SUCCESS_NUMBERS_LIST':
      return { meta: action.payload.data.meta, data: action.payload.data.data };
    case 'NEXT_PAGE':
      state.meta.page = Number(state.meta.page) + action.payload.page;
      state.meta.page = state.meta.page.toString();
      return { meta: state.meta, data: state.data };
    case 'PREV_PAGE':
        state.meta.page = Number(state.meta.page) - action.payload.page
        state.meta.page = state.meta.page.toString();
        return { meta: state.meta, data: state.data };
      case 'PER_PAGE':
        state.meta.perPage = action.payload.quantity;
        state.meta.perPage = state.meta.perPage.toString();
        return { meta: state.meta, data: state.data };
    default:
      return state;
  }
}

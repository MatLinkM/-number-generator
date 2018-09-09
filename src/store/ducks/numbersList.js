export const Types = {
  REQUEST: 'numbersList/REQUEST',
  SUCCESS: 'numbersList/SUCCESS',
  PER_PAGE: 'numbersList/PER_PAGE',
  NEXT_PAGE: 'numbersList/NEXT_PAGE',
  PREV_PAGE: 'numbersList/PREV_PAGE',
};

/**
 * Reducers
 */
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
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return { meta: action.payload.data.meta, data: action.payload.data.data, loading: false };
    case Types.PER_PAGE:
      state.meta.perPage = action.payload.quantity;
      state.meta.perPage = state.meta.perPage.toString();
      return { meta: state.meta, data: state.data };
    case Types.NEXT_PAGE:
      state.meta.page = Number(state.meta.page) + action.payload.page;
      state.meta.page = state.meta.page.toString();
      return { meta: state.meta, data: state.data };
    case Types.PREV_PAGE:
      state.meta.page = Number(state.meta.page) - action.payload.page
      state.meta.page = state.meta.page.toString();
      return { meta: state.meta, data: state.data };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  requestNumbersList: dataPage => ({
    type: Types.REQUEST,
    payload: { dataPage }
  }),

  successNumbersList: data => ({
    type: Types.SUCCESS,
    payload: { data }
  }),

  perPage: quantity => ({
    type: Types.PER_PAGE,
    payload: { quantity }
  }),

  nextPage: page => ({
    type: Types.NEXT_PAGE,
    payload: { page }
  }),

  prevPage: page => ({
    type: Types.PREV_PAGE,
    payload: { page }
  }),
};

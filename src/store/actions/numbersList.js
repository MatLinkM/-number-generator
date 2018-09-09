export const requestNumbersList = dataPage => ({
  type: 'REQUEST_NUMBERS_LIST',
  payload: { dataPage }
});

export const successNumbersList = data => ({
  type: 'SUCCESS_NUMBERS_LIST',
  payload: { data }
});

export const perPage = quantity => ({
  type: 'PER_PAGE',
  payload: { quantity }
});

export const nextPage = page => ({
  type: 'NEXT_PAGE',
  payload: { page }
});

export const prevPage = page => ({
  type: 'PREV_PAGE',
  payload: { page }
});

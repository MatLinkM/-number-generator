export const nextPage = page => ({
    type: 'NEXT_PAGE',
    payload: { page }
});

export const prevPage = page => ({
    type: 'PREV_PAGE',
    payload: { page }
});

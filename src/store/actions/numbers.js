export const requestNumbers = dataPage => ({
    type: 'NUMBERS_REQUEST',
    payload: { dataPage }
});

export const successNumber = data => ({
    type: 'NUMBERS_SUCCESS',
    payload: { data }
});

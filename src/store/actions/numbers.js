export const requestNumbers = dataPage => ({
    type: 'NUMBERS_REQUEST',
    payload: { dataPage }
});

export const numbersSuccess = data => ({
    type: 'NUMBERS_SUCCESS',
    payload: { data }
});

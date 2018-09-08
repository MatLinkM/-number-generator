import { all, takeLatest } from 'redux-saga/effects';
import { getNumbers } from './numbers';

export default function* rootSaga() {
    yield all([
        takeLatest('NUMBERS_REQUEST', getNumbers)
    ]);
}

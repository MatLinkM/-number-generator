import { all, takeLatest } from 'redux-saga/effects';
import { getNumbersList } from './numbersList';

export default function* rootSaga() {
  yield all([takeLatest('REQUEST_NUMBERS_LIST', getNumbersList)]);
}

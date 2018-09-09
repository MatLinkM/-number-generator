import { all, takeLatest } from 'redux-saga/effects';

import { Types as NumbersListTypes } from '../ducks/numbersList';
import { getNumbersList } from './numbersList';



export default function* rootSaga() {
  yield all([takeLatest(NumbersListTypes.REQUEST, getNumbersList)]);
}

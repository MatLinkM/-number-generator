import { call, put } from 'redux-saga/effects';
import api from '../../services';

import { Creators as NumbersListActions } from '../ducks/numbersList';

export function* getNumbersList(action) {
  const { data } = yield call(
    api.get,
    `/numbers?page=${action.payload.dataPage.page}&perPage=${action.payload.dataPage.perPage}`
  );

  const numbersList = data;

  yield put(NumbersListActions.successNumbersList(numbersList));
}

import { call, put } from 'redux-saga/effects';
import api from '../../services';

import { successNumber } from '../actions/numbers';

export function* getNumbers(action) {
  const { data } = yield call(api.get, `/numbers?page=${action.payload.dataPage.page}&perPage=${action.payload.dataPage.perPage}`);

  const numbers = data.data[0];
  //   number: data.data.number,
  //   cost: data.data.cost
  // }

  yield put(successNumber(numbers));
}

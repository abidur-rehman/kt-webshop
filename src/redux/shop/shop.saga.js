import { call, put, takeEvery } from 'redux-saga/effects';
import { getShopData } from '../../api/restApi';
import ShopActionTypes from './shop.types';

export function* fetchShopData() {
  const response = yield call(getShopData);
  const data = yield response.data;
  yield put({ type: ShopActionTypes.FETCH_SHOP_DATA_SUCCESS, payload: data.sections });
}

export function* watchfetchShopData() {
  yield takeEvery(ShopActionTypes.FETCH_SHOP_DATA, fetchShopData);
}
import { all } from 'redux-saga/effects';
import { watchfetchShopData } from './shop/shop.saga';

export default function* rootSaga() {
  yield all([
    watchfetchShopData()
  ]);
}
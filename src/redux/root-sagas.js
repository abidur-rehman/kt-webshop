import { all } from 'redux-saga/effects';
import { watchfetchShopData } from './shop/shop.saga';
import { watchAuthUser, watchSignUpUser } from './user/user.saga';

export default function* rootSaga() {
  yield all([
    watchfetchShopData(),
    watchAuthUser(),
    watchSignUpUser()
  ]);
}
import { call, put, takeEvery } from 'redux-saga/effects';
import { authenticate, signup } from '../../api/restApi';
import { UserActionTypes } from './user.types';


export function* authUser(action) {
  const { email, password } = action.payload;
  const response = yield call(authenticate, email, password);
  const { data, status } = response;
  if (data && status === 200) {
    yield put({ type: UserActionTypes.SET_CURRENT_USER, payload: data });
  } else {
    yield put({ type: UserActionTypes.AUTH_USER_FAILURE, payload: data });
  }
}

export function* signUpUser(action) {
  const { name, email, password } = action.payload;
  const response = yield call(signup, name, email, password);
  const { data, status } = response;
  if (data && status === 201) {
    yield put({ type: UserActionTypes.SET_CURRENT_USER, payload: data });
  } else {
    yield put({ type: UserActionTypes.SIGN_USER_FAILURE, payload: data });
  }
}

export function* watchSignUpUser() {
  yield takeEvery(UserActionTypes.SIGN_USER, signUpUser);
}

export function* watchAuthUser() {
  yield takeEvery(UserActionTypes.AUTH_USER, authUser);
}
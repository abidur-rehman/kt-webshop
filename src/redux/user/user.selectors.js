import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user ? user.currentUser : null
);

export const selectUserLoginError = createSelector(
  [selectUser],
  user => user.loginError
);

export const selectUserSignUpError = createSelector(
  [selectUser],
  user => user.signUpError
);

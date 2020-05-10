import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user ? user.currentUser : null
);

export const selectUserErrorMessage = createSelector(
  [selectUser],
  user => user.error
);

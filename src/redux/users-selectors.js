import { createSelector } from 'reselect';

const receiveUsersSelector = (state) => {
  return state.usersPage.users;
};

export const receiveUsers = createSelector(
  receiveUsersSelector,
  (users) => {
    return users;
  }
);

const receivePageSizeSelector = (state) => {
  return state.usersPage.pageSize;
};

export const receivePageSize = createSelector(
  receivePageSizeSelector,
  (pageSize) => {
    return pageSize;
  }
);

const receiveTotalUsersCountSelector = (state) => {
  return state.usersPage.totalUsersCount;
};

export const receiveTotalUsersCount = createSelector(
  receiveTotalUsersCountSelector,
  (totalUsersCount) => {
    return totalUsersCount;
  }
);

const receiveCurrentPageSelector = (state) => {
  return state.usersPage.currentPage;
};

export const receiveCurrentPage = createSelector(
  receiveCurrentPageSelector,
  (currentPage) => {
    return currentPage;
  }
);

const receiveIsFetchingSelector = (state) => {
  return state.usersPage.isFetching;
};

export const receiveIsFetching = createSelector(
  receiveIsFetchingSelector,
  (isFetching) => {
    return isFetching;
  }
);

const receiveIsFollowingProgressSelector = (state) => {
  return state.usersPage.isFollowingProgress;
};

export const receiveIsFollowingProgress = createSelector(
  receiveIsFollowingProgressSelector,
  (isFollowingProgress) => {
    return isFollowingProgress;
  }
);

const receiveIsAuthSelector = (state) => {
  return state.auth.isAuth;
};

export const receiveIsAuth = createSelector(
  receiveIsAuthSelector,
  (isAuth) => {
    return isAuth;
  }
);

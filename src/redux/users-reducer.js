import { usersAPI } from '../api/api';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'users/SET_IS_FETCHING';
const SET_IS_FOLLOWING_PROGRESS =
  'users/SET_IS_FOLLOWING_PROGRESS';

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowingProgress: [],
};

export const usersPageReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((e) => {
          if (e.id === action.id) {
            return { ...e, followed: true };
          }
          return e;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((e) => {
          if (e.id === action.id) {
            return { ...e, followed: false };
          }
          return e;
        }),
      };

    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.page,
      };
    }

    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.count,
      };
    }

    case SET_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }

    case SET_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        isFollowingProgress: action.isFetching
          ? [...state.isFollowingProgress, action.userId]
          : state.isFollowingProgress.filter(
              (id) => id !== action.userId
            ),
      };
    }

    default:
      return state;
  }
};

export const follow = (id) => {
  return {
    type: FOLLOW,
    id,
  };
};

export const unfollow = (id) => {
  return {
    type: UNFOLLOW,
    id,
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    page,
  };
};

export const setTotalUsersCount = (count) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count,
  };
};

export const setIsFetching = (isFetching) => {
  return {
    type: SET_IS_FETCHING,
    isFetching,
  };
};

export const setIsFollowingProgress = (
  isFetching,
  userId
) => {
  return {
    type: SET_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  };
};

export const getUsers = (currentPage, pageSize) => {
  return async (dispath) => {
    dispath(setIsFetching(true));

    const data = await usersAPI.getUsers(
      currentPage,
      pageSize
    );

    dispath(setIsFetching(false));
    dispath(setUsers(data.items));
    dispath(setTotalUsersCount(data.totalCount));
  };
};

export const getChangeUsers = (page, pageSize = 10) => {
  return async (dispath) => {
    dispath(setCurrentPage(page));
    dispath(setIsFetching(true));

    const data = await usersAPI.getUsers(page, pageSize);

    dispath(setIsFetching(false));
    dispath(setUsers(data.items));
  };
};

export const onUnfollow = (id) => {
  return async (dispath) => {
    dispath(setIsFollowingProgress(true, id));

    const data = await usersAPI.getUnfollow(id);

    if (data.resultCode === 0) {
      dispath(unfollow(id));
    }

    dispath(setIsFollowingProgress(false, id));
  };
};

export const onFollow = (id) => {
  return async (dispath) => {
    dispath(setIsFollowingProgress(true, id));

    const data = await usersAPI.getFollow(id);

    if (data.resultCode === 0) {
      dispath(follow(id));
    }

    dispath(setIsFollowingProgress(false, id));
  };
};

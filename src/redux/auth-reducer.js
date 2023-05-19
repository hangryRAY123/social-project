import { stopSubmit } from 'redux-form';
import { authAPI, profileAPI } from '../api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_IS_FETCHING = 'auth/SET_IS_FETCHING';
const SET_USER_PHOTO = 'auth/SET_USER_PHOTO';

const initialState = {
  id: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false,
  photo: null,
};

export const authReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }

    case SET_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }

    case SET_USER_PHOTO: {
      return {
        ...state,
        photo: action.photo,
      };
    }

    default:
      return state;
  }
};

export const setAuthUserData = (
  id,
  login,
  email,
  isAuth
) => {
  return {
    type: SET_USER_DATA,
    data: { id, login, email, isAuth },
  };
};

export const setIsFetching = (isFetching) => {
  return {
    type: SET_IS_FETCHING,
    isFetching,
  };
};

export const setUserPhoto = (photo) => {
  return {
    type: SET_USER_PHOTO,
    photo,
  };
};

export const getAuth = () => {
  return async (dispath) => {
    dispath(setIsFetching(true));
    const authData = await authAPI.getAuth();
    dispath(setIsFetching(false));

    if (authData.resultCode === 0) {
      const { id, login, email } = authData.data;
      const profileData = await profileAPI.getProfile(id);

      dispath(setAuthUserData(id, login, email, true));
      dispath(setUserPhoto(profileData.photos.small));
    }
  };
};

export const login = (email, password, rememberMe) => {
  return async (dispath) => {
    const data = await authAPI.login(
      email,
      password,
      rememberMe
    );

    if (data.resultCode === 0) {
      dispath(getAuth());
    } else {
      const message =
        data.messages.length > 0
          ? data.messages[0]
          : 'Сheck the entered data';

      dispath(
        stopSubmit('login', {
          _error: message,
        })
      );
    }
  };
};

export const logout = () => {
  return async (dispath) => {
    dispath(setIsFetching(true));
    const data = await authAPI.logout();
    dispath(setIsFetching(false));

    if (data.resultCode === 0) {
      dispath(setAuthUserData(null, null, null, false));
    }
  };
};

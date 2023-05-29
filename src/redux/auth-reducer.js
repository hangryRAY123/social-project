import { stopSubmit } from 'redux-form';
import {
  authAPI,
  profileAPI,
  securityAPI,
} from '../api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_IS_FETCHING = 'auth/SET_IS_FETCHING';
const SET_USER_PHOTO = 'auth/SET_USER_PHOTO';
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';

const initialState = {
  id: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false,
  photo: null,
  captchaUrl: null,
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

    case SET_CAPTCHA_URL: {
      return {
        ...state,
        captchaUrl: action.captchaUrl,
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

export const setCaptchaUrl = (captchaUrl) => {
  return {
    type: SET_CAPTCHA_URL,
    captchaUrl,
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

export const login = (
  email,
  password,
  rememberMe,
  captcha
) => {
  return async (dispath) => {
    const data = await authAPI.login(
      email,
      password,
      rememberMe,
      captcha
    );

    if (data.resultCode === 0) {
      dispath(getAuth());
    } else {
      if (data.resultCode === 10) {
        dispath(getCaptchaUrl());
      }

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

export const getCaptchaUrl = () => {
  return async (dispath) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;

    dispath(setCaptchaUrl(captchaUrl));
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

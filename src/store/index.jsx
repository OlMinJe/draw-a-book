import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import userReducer from './reducer/User';

const reducers = combineReducers({ user: userReducer });

export const store = configureStore({
  reducer: reducers,
  devTools: true,
});

export const checkAuthentication = () => {
  const isLoggedIn = Cookies.get('isLoggedIn');
  const memberName = Cookies.get('memberName');
  const refreshToken = Cookies.get('refreshToken');

  return (
    isLoggedIn !== null &&
    memberName !== null &&
    memberName !== '' &&
    memberName !== undefined &&
    refreshToken !== null &&
    refreshToken !== '' &&
    refreshToken !== undefined
  );
};

export default store;

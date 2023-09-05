/* eslint-disable no-param-reassign */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TEmail} from '@src/app/types';

const USER = 'user';
const ACCESS_KEY = 'access';

interface IAuthState {
  email: TEmail;
  isAuth: boolean;
}

interface IAuthPayload {
  email: TEmail;
  access: string;
}

const initialState: IAuthState = {
  email: localStorage.getItem(USER) ?? '',
  isAuth: Boolean(localStorage.getItem(ACCESS_KEY)) ?? false,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<IAuthPayload>) {
      state.email = action.payload.email;
      state.isAuth = Boolean(action.payload.access);
      localStorage.setItem(USER, JSON.stringify(action.payload.email));
      localStorage.setItem(ACCESS_KEY, JSON.stringify(action.payload.access));
    },
    logout(state) {
      state.email = '';
      state.isAuth = false;
      localStorage.removeItem(USER);
      localStorage.removeItem(ACCESS_KEY);
    },
    register(state, action: PayloadAction<IAuthPayload>) {
      state.email = action.payload.email;
      state.isAuth = Boolean(action.payload.access);
      localStorage.setItem(USER, JSON.stringify(action.payload.email));
      localStorage.setItem(ACCESS_KEY, JSON.stringify(action.payload.access));
    },
  },
});

export default AuthSlice.reducer;
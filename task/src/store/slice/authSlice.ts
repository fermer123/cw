/* eslint-disable no-param-reassign */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {authApi} from '../api/authApi';

const USER = 'user';
const ACCESS_KEY = 'access';

interface IAuthState {
  name: string;
  token: string;
}

interface IAuthPayload {
  name: string;
  token: string;
}

const initialState: IAuthState = {
  name: localStorage.getItem(USER) ?? '',
  token: localStorage.getItem(ACCESS_KEY) ?? '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<IAuthPayload>) {
      const {name, token} = action.payload;
      state.name = name;
      state.token = token;
      localStorage.setItem(USER, JSON.stringify(action.payload.name));
      localStorage.setItem(ACCESS_KEY, JSON.stringify(action.payload.token));
    },
    register(state, action: PayloadAction<IAuthPayload>) {
      const {name, token} = action.payload;
      state.name = name;
      state.token = token;
      localStorage.setItem(USER, JSON.stringify(name));
      localStorage.setItem(ACCESS_KEY, JSON.stringify(token));
    },
    logout(state) {
      state.name = '';
      state.token = '';
      localStorage.removeItem(USER);
      localStorage.removeItem(ACCESS_KEY);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, {payload}: PayloadAction<IAuthPayload>) => {
        state.token = payload.token;
        state.name = payload.name;
      },
    );
  },
});

export default authSlice.reducer;

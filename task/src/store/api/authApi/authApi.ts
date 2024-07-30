import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {IAuthState} from '@src/store/slice/authSlice';

import {IAuthDataRequest} from '../types/types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  tagTypes: ['auth'],
  endpoints: (build) => ({
    login: build.mutation<IAuthState, IAuthDataRequest>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),

    register: build.mutation<IAuthState, IAuthDataRequest>({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {useLoginMutation, useRegisterMutation} = authApi;

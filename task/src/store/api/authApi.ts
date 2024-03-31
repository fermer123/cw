import {IAuthData} from '@app/types';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

import {IAuthState} from '../slice/authSlice';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL as string,
  }),
  tagTypes: ['auth'],
  endpoints: (build) => ({
    login: build.mutation<IAuthState, IAuthData>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),

    register: build.mutation<IAuthState, IAuthData>({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {useLoginMutation, useRegisterMutation} = authApi;

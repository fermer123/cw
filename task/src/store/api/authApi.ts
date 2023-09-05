import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {IAuthData} from '@src/app/types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({baseUrl: baseURL as string}),
  tagTypes: ['auth'],
  endpoints: (build) => ({
    login: build.mutation({
      query: (body: IAuthData) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
    register: build.mutation({
      query: (body: IAuthData) => ({
        url: '/register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {useLoginMutation, useRegisterMutation} = authApi;

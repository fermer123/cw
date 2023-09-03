import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

// eslint-disable-next-line import/prefer-default-export
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
});

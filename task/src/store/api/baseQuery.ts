import {fetchBaseQuery} from '@reduxjs/toolkit/query';

import {RootState} from '..';

export const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  // credentials: 'include', //для куки
  prepareHeaders: (headers, {getState}) => {
    const {token} = (getState() as RootState).auth;
    if (token) {
      headers.set('Authorization', token || null);
      headers.set('accept', 'application/json');
      headers.set('Content-Type', 'application/json');
    }
    return headers;
  },
});

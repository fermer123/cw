import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IWords} from '@src/types';

export const wordsApi = createApi({
  reducerPath: 'wordsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
  endpoints: (build) => ({
    getWords: build.query<IWords, string>({
      query: () => 'words',
    }),
  }),
});

export const {useGetWordsQuery} = wordsApi;

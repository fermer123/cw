import {IWords} from '@app/types';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const wordsApi = createApi({
  reducerPath: 'wordsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
  tagTypes: ['words'],
  endpoints: (build) => ({
    getWords: build.query<IWords, string>({
      query: () => 'words',
      providesTags: ['words'],
    }),
  }),
});

export const {useGetWordsQuery} = wordsApi;

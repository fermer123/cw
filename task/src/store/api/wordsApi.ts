import {IWord, IWords} from '@app/types';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const wordsApi = createApi({
  reducerPath: 'wordsApi',
  baseQuery: fetchBaseQuery({baseUrl: baseURL}),
  tagTypes: ['words'],
  endpoints: (build) => ({
    getWords: build.query<IWords, string>({
      query: () => 'words',
      providesTags: ['words'],
    }),
    addWords: build.mutation({
      query: (body: IWord) => ({
        url: `/words${body.id}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['words'],
    }),
    deleteWords: build.mutation({
      query: (body: IWord) => ({
        url: `/words${body.id}`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {useGetWordsQuery, useAddWordsMutation, useDeleteWordsMutation} =
  wordsApi;

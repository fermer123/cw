import {IWord} from '@app/types';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const wordsApi = createApi({
  reducerPath: 'wordsApi',
  baseQuery: fetchBaseQuery({baseUrl: baseURL}),
  tagTypes: ['words'],
  endpoints: (build) => ({
    getWords: build.query<IWord[], string>({
      query: (limit = '') => `words?${limit && `limit=${limit}`}`,
      providesTags: ['words'],
    }),
    addWords: build.mutation({
      query: (body: IWord) => ({
        url: `/words/${body.id}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['words'],
    }),
    deleteWords: build.mutation({
      query: (body: Partial<IWord>) => ({
        url: `/words/${body.id}`,
        method: 'DELETE',
        body,
      }),
    }),
    changeWord: build.mutation({
      query: (body: IWord) => ({
        url: `/words/${body.id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['words'],
    }),
  }),
});

export const {
  // words

  useGetWordsQuery,
  useAddWordsMutation,
  useDeleteWordsMutation,
  useChangeWordMutation,

  //
} = wordsApi;

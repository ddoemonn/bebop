import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const posterApi = createApi({
  reducerPath: 'posterApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://image.tmdb.org/t/p/w500',
  }),
  endpoints: builder => ({
    getPoster: builder.query<unknown, { poster_path: string }>({
      query: ({ poster_path }) => ({
        url: poster_path,
      }),
    }),
  }),
});

export const { useGetPosterQuery } = posterApi;

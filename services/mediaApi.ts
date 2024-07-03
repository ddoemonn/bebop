import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import bebopConfig from '@/bebop.config';

interface Media {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
}

interface MediaPage {
  page: number;
  results: Media[];
  total_pages: number;
  total_results: number;
}

// Define a service using a base URL and expected endpoints
export const mediaApi = createApi({
  reducerPath: 'mediaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
  }),
  endpoints: builder => ({
    getPopularMovies: builder.query<MediaPage, { page: number }>({
      query: ({ page }) => ({
        url: '/movie/popular',
        params: {
          api_key: bebopConfig.mediaApiKey,
          page,
        },
      }),
    }),
    getPopularTVShows: builder.query<MediaPage, { page: number }>({
      query: ({ page }) => ({
        url: '/tv/popular',
        params: {
          api_key: bebopConfig.mediaApiKey,
          page,
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPopularMoviesQuery, useGetPopularTVShowsQuery } = mediaApi;

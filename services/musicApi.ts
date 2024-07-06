import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface SpotifyTrack {
  added_at: string;
  added_by: {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  is_local: boolean;
  primary_color: string | null;
  track: {
    preview_url: string | null;
    available_markets: string[];
    explicit: boolean;
    type: string;
    episode: boolean;
    track: boolean;
    album: {
      available_markets: string[];
      type: string;
      album_type: string;
      href: string;
      id: string;
      images: {
        url: string;
        width: number;
        height: number;
      }[];
      name: string;
      release_date: string;
      release_date_precision: string;
      uri: string;
      artists: {
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }[];
      external_urls: {
        spotify: string;
      };
      total_tracks: number;
    };
    artists: {
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }[];
    disc_number: number;
    track_number: number;
    duration_ms: number;
    external_ids: {
      isrc: string;
    };
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    name: string;
    popularity: number;
    uri: string;
    is_local: boolean;
  };
  video_thumbnail: {
    url: string | null;
  };
}

interface Playlist {
  tracks: {
    href: string;
    items: SpotifyTrack[];
  };
}

export const musicApi = createApi({
  reducerPath: 'musicApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spotify.com/v1/' }),
  endpoints: builder => ({
    getPlaylist: builder.query<Playlist, void>({
      query: () => ({
        url: '/playlists/2Rbyav41QxFMnEmS6pVU2X',
        method: 'GET',
        headers: {
          Authorization: `Bearer BQCTIpx1gJWMP7c8P_asLJ2xYcvnLH15sNTCYM8oHe1t4-YdtrxOQDCKcBqn9dGGVuehQesdsjzKlfY5d3bhvBwXQu1YQNaoMkyxmHfqiRuJX1ygYnU  `,
        },
      }),
    }),
  }),
});

export const { useGetPlaylistQuery } = musicApi;
export default musicApi.reducer;

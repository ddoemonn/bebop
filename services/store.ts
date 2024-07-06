import { configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query';

import { bookApi } from './bookApi';
import { mediaApi } from './mediaApi';
import { musicApi } from './musicApi';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [mediaApi.reducerPath]: mediaApi.reducer,
    [bookApi.reducerPath]: bookApi.reducer,
    [musicApi.reducerPath]: musicApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(mediaApi.middleware, bookApi.middleware, musicApi.middleware /*, moreApis.middleware */),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

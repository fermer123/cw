import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {wordsApi} from './wordsApi';

const rootReducer = combineReducers({
  [wordsApi.reducerPath]: wordsApi.reducer,
});

export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true, // isDev
    middleware: (getDefaultMiddleWare) =>
      getDefaultMiddleWare().concat(wordsApi.middleware),
  });
  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { AnyAction } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Config from 'react-native-config';
import { persistStore } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';

import { exampleServices } from '@app/services/example';
import type {
  Dependencies,
  Middlewares,
  Reducers,
  RootState,
} from '@app/store/types';

import { listReducer } from './example/slice';

const devTools = Config.API_URL === '';

const dependencies: Dependencies = {
  exampleServices,
};

const reducers: Reducers = {
  list: listReducer,
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blackList: [],
  whitelist: [],
};

const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore<RootState, AnyAction, Middlewares>({
  reducer: persistedReducer,
  devTools,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: dependencies,
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };

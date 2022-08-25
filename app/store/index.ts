import AsyncStorage from '@react-native-async-storage/async-storage';
import type { AnyAction } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Config from 'react-native-config';
import { persistStore } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';

import { charactersServices } from '@app/services/characters';
import type {
  Dependencies,
  Middlewares,
  Reducers,
  RootState,
} from '@app/store/types';

import { charactersReducer } from './character/slice';

const devTools = Config.API_URL === '';

const dependencies: Dependencies = {
  charactersServices,
};

const reducers: Reducers = {
  characters: charactersReducer,
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blackList: ['characters'],
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

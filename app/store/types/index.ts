import type {
  AnyAction,
  Dispatch,
  PayloadAction as ReduxPayloadAction,
  Reducer,
  SliceCaseReducers,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import type { ThunkMiddlewareFor } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import type { PersistPartial } from 'redux-persist/lib/persistReducer';

import type { charactersServices } from '@app/services/characters';

import type { CharactersState } from '../character/types';

type PayloadAction<T> = ReduxPayloadAction<T>;

type SliceReducer<T> = SliceCaseReducers<T>;

type Dependencies = {
  charactersServices: typeof charactersServices;
};

type RootState = {
  characters: CharactersState;
} & PersistPartial;

type AppDispatch = Dispatch & ThunkDispatch<RootState, Dependencies, AnyAction>;

type ThunkAsyncConfig = {
  extra: Dependencies;
  state: RootState;
  dispatch: AppDispatch;
};

type RequestSendFeedback = {
  phone: string;
  email: string;
  notifyByEmail: boolean;
  msg: string;
};

type ThunkMiddlewareOptions = {
  thunk: {
    extraArgument: Dependencies;
  };
};

type Middlewares = ThunkMiddlewareFor<RootState, ThunkMiddlewareOptions>[];

type MainState = Omit<RootState, '_persist'>;

type Reducers = { [K in keyof MainState]: Reducer<MainState[K], AnyAction> };

export type {
  ThunkAsyncConfig,
  SliceReducer,
  PayloadAction,
  RootState,
  Dependencies,
  Middlewares,
  RequestSendFeedback,
  Reducers,
  ThunkMiddlewareOptions,
};

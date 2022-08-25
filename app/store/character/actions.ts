import { createAsyncThunk } from '@reduxjs/toolkit';

import { makeSyncFavorites } from '@app/utils/makeSyncFavorites';

import { SliceNames } from '../enums';
import type { ThunkAsyncConfig } from '../types';

import type {
  CharactersActionResponse,
  CharactersMoreActionRequest,
} from './types';

const fetchCharactersAction = createAsyncThunk<
  CharactersActionResponse,
  CharactersMoreActionRequest,
  ThunkAsyncConfig
>(
  `${SliceNames.CHARACTERS}/fetchCharactersAction`,
  async (
    { pageNumber },
    {
      extra: {
        charactersServices: { fetchCharacters },
      },
      getState,
    },
  ) => {
    const {
      characters: { favorites },
    } = getState();

    try {
      const { info, results } = await fetchCharacters(pageNumber);

      const syncFavorites = makeSyncFavorites({
        characters: results,
        favoritesIds: favorites,
      });

      return {
        info,
        characters: syncFavorites,
      };
    } catch (error) {
      return Promise.reject(error);
    }
  },
);

export { fetchCharactersAction };

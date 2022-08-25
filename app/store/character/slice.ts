import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { DataLoadingStates } from '@app/common/enums';

import { SliceNames } from '../enums';
import type { PayloadAction, RootState } from '../types';

import { fetchCharactersAction } from './actions';
import { selectId } from './selectors';
import type { CharactersEntityState, CharactersState } from './types';

const charactersAdapter = createEntityAdapter<CharactersEntityState>({
  selectId,
});

const charactersSelector = charactersAdapter.getSelectors<RootState>(
  (state) => state.characters.characters,
);

const selectCharactersById = charactersSelector.selectById;
const allCharacterSelector = charactersSelector.selectAll;
const charactersIds = charactersSelector.selectIds;

const initialState: CharactersState = {
  characters: charactersAdapter.getInitialState(),
  favorites: [],
  info: null,
  status: DataLoadingStates.COMPLETED,
};

const slice = createSlice({
  name: SliceNames.CHARACTERS,
  initialState,
  reducers: {
    addFavorite(state, { payload: { id } }: PayloadAction<{ id: string }>) {
      state.favorites.push(id);

      charactersAdapter.updateOne(state.characters, {
        id,
        changes: {
          isFavorite: true,
        },
      });
    },
    deleteFavorite(state, { payload: { id } }: PayloadAction<{ id: string }>) {
      const newFavoritesIds = state.favorites.filter(
        (favoriteId) => favoriteId !== id,
      );
      state.favorites = newFavoritesIds;

      charactersAdapter.updateOne(state.characters, {
        id,
        changes: {
          isFavorite: false,
        },
      });
    },
    resetFavorites(state) {
      state.favorites = [];

      // FIXME: убрать 0. Он позволяет убрать ошибку ts
      const updatesState = Object.values(state.characters.entities).map(
        (item) => ({
          id: item?.id || 0,
          changes: {
            ...item,
            isFavorite: false,
          },
        }),
      );

      charactersAdapter.updateMany(state.characters, updatesState);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharactersAction.fulfilled, (state, { payload }) => {
        const { characters, info } = payload;

        state.info = info;
        state.status = DataLoadingStates.COMPLETED;

        charactersAdapter.addMany(state.characters, characters);
      })
      .addCase(fetchCharactersAction.pending, (state) => {
        state.status = DataLoadingStates.LOADING;
      })
      .addCase(fetchCharactersAction.rejected, (state, { error }) => {
        state.status = DataLoadingStates.ERROR;
        console.log(error);
        // TODO: кинуть тостер ошибки
      });
  },
});

export {
  charactersAdapter,
  selectCharactersById,
  allCharacterSelector,
  charactersIds,
};

export const {
  reducer: charactersReducer,
  actions: { addFavorite, deleteFavorite, resetFavorites },
} = slice;

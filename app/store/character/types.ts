import type { EntityState } from '@reduxjs/toolkit';

import type { DataLoadingStates } from '@app/common/enums';
import type { Character } from '@app/common/types/characters';
import type { Info } from '@app/common/types/info';

type CharactersEntityState = Omit<Character, 'episode'> & {
  isFavorite: boolean;
};

type CharactersState = {
  characters: EntityState<CharactersEntityState>;
  favorites: string[];
  status: DataLoadingStates;
  info: Info | null;
};

type CharactersActionResponse = {
  info: Info;
  characters: CharactersEntityState[];
};

type CharactersMoreActionRequest = {
  pageNumber?: number;
};

export type {
  CharactersState,
  CharactersEntityState,
  CharactersActionResponse,
  CharactersMoreActionRequest,
};

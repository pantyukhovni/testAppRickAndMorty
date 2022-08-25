import type { Character } from '@app/common/types/characters';

type SyncFavoritesRequest = {
  characters: Character[];
  favoritesIds: string[];
};

type CharacterStatus = 'Dead' | 'unknown' | 'Alive';

export type { SyncFavoritesRequest, CharacterStatus };

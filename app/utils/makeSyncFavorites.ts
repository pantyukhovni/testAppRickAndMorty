import type { CharactersActionResponse } from '@app/store/character/types';

import type { SyncFavoritesRequest } from './types';

const makeSyncFavorites = ({
  characters,
  favoritesIds,
}: SyncFavoritesRequest): CharactersActionResponse['characters'] => {
  const syncFavorites = characters.map(({ id, episode, ...otherParams }) => {
    let isFavorite = favoritesIds.some((favorites) => id === favorites);

    return {
      isFavorite,
      id,
      ...otherParams,
    };
  });

  return syncFavorites;
};

export { makeSyncFavorites };

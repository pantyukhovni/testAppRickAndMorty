import { useAppSelector } from '../hooks/useAppSelector';

import { allCharacterSelector, selectCharactersById } from './slice';

const selectId = ({ id }: { id: string }) => id;

const useCharacterById = (id: string) =>
  useAppSelector((state) => selectCharactersById(state, id));

const useAllCharacterSelector = () =>
  useAppSelector((state) => allCharacterSelector(state));

const useFavorites = () =>
  useAppSelector(({ characters: { favorites } }) => favorites);

const useFavoritesCounter = () => useFavorites().length;

const useIsFavorites = (id: string) =>
  useAppSelector(({ characters: { favorites } }) => favorites.includes(id));

const useInfo = () => useAppSelector(({ characters: { info } }) => info);

const useLoading = () => useAppSelector(({ characters: { status } }) => status);

export {
  selectId,
  useCharacterById,
  useFavorites,
  useAllCharacterSelector,
  useFavoritesCounter,
  useIsFavorites,
  useInfo,
  useLoading,
};

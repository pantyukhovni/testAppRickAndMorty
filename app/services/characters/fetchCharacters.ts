import type { CharactersResponse } from '@app/common/types/characters';

import { query } from '../api';

import { GET_CHARACTERS } from './query/getCharacters';
import type {
  CharactersByIdsVariablesQuery,
  CharactersResponseQuery,
} from './types';

const fetchCharacters = async (
  pageNumber?: number,
): Promise<CharactersResponse> => {
  const {
    data: { characters },
  } = await query<CharactersResponseQuery, CharactersByIdsVariablesQuery>({
    query: GET_CHARACTERS,
    ...(pageNumber && {
      variables: {
        page: pageNumber,
      },
    }),
  });
  return characters;
};

export { fetchCharacters };

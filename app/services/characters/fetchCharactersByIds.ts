import type { Character } from '@app/common/types/characters';

import { query } from '../api';

import { GET_CHARACTERS_BY_IDS } from './query/getCharactersByIds';
import type {
  CharacterByIdsVariablesQuery,
  CharactersByIdsResponseQuery,
} from './types';

const fetchCharactersByIds = async (ids: string[]): Promise<Character[]> => {
  const {
    data: { charactersByIds },
  } = await query<CharactersByIdsResponseQuery, CharacterByIdsVariablesQuery>({
    query: GET_CHARACTERS_BY_IDS,
    variables: {
      ids,
    },
  });
  return charactersByIds;
};

export { fetchCharactersByIds };

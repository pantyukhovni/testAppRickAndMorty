import type {
  Character,
  CharactersResponse,
} from '@app/common/types/characters';

type CharactersResponseQuery = {
  characters: CharactersResponse;
};

type CharactersByIdsResponseQuery = {
  charactersByIds: Character[];
};

type CharactersByIdsVariablesQuery = {
  page?: number;
};

type CharacterByIdsVariablesQuery = {
  ids: string[];
};
export {
  CharactersResponseQuery,
  CharactersByIdsVariablesQuery,
  CharactersByIdsResponseQuery,
  CharacterByIdsVariablesQuery,
};

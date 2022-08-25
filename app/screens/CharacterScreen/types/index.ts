import type { Character } from '@app/common/types/characters';

type CharacterResponse = {
  character: Character;
};

type CharacterRequest = {
  id: number;
};

export type { CharacterResponse, CharacterRequest };

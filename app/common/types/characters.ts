import type { Episode } from './episode';
import type { Info } from './info';

type CharacterStatus = 'Dead' | 'unknown' | 'Alive';

type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Character;
  created: string;
};

type Character = {
  id: string;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: Episode;
};

interface CharactersResponse {
  info: Info;
  results: Character[];
}

export { Character, CharactersResponse };

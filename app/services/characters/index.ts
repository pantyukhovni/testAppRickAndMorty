import { fetchCharacters } from './fetchCharacters';
import { fetchCharactersByIds } from './fetchCharactersByIds';

class CharactersServices {
  fetchCharacters = (pageNumber?: number) => fetchCharacters(pageNumber);
  fetchCharactersByIds = (ids: string[]) => fetchCharactersByIds(ids);
}

const charactersServices = new CharactersServices();

export { charactersServices };

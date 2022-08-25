import type { CharacterStatus } from './types';

const isAliveCharacter = (status: CharacterStatus): boolean =>
  status === 'Alive';

export { isAliveCharacter };

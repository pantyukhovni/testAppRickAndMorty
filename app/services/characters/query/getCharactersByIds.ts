import { gql } from '@apollo/client';

export const GET_CHARACTERS_BY_IDS = gql`
  query GetCharactersByIds($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      id
      name
      type
      image
      gender
      species
      status
    }
  }
`;

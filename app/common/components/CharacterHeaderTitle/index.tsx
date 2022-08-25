import type { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import type { RootStackParamsList } from '@app/navigation/types';
import { useCharacterById } from '@app/store/character/selectors';

const CharacterHeaderTitle = () => {
  const {
    params: { id },
  } = useRoute<RouteProp<RootStackParamsList, 'Character'>>();

  const character = useCharacterById(id);

  const { name } = character || {};

  return <Text style={styles.text}>{name}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});

export { CharacterHeaderTitle };

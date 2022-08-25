import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useDispatch } from 'react-redux';

import type { RootStackParamsList } from '@app/navigation/types';
import { FavoritesIcon } from '@app/res/FavoritesIcon';
import { useCharacterById } from '@app/store/character/selectors';
import { addFavorite, deleteFavorite } from '@app/store/character/slice';
import { colors } from '@app/styles/theme';

import { StatusIndicator } from '../StatusIndicator';

interface OwnProps {
  id: string;
}

const CharacterCard = ({ id }: OwnProps) => {
  const character = useCharacterById(id);

  const dispatch = useDispatch();

  const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();

  const { isFavorite, image = '', name, status = 'unknown' } = character || {};

  const onPressCharacter = useCallback(() => {
    navigation.navigate('Character', { id });
  }, [id]);

  const toggleFavorite = useCallback(() => {
    if (isFavorite) {
      dispatch(deleteFavorite({ id }));
    } else {
      dispatch(addFavorite({ id }));
    }
  }, [id, isFavorite]);

  const favoriteColor = isFavorite ? colors.pink : colors.paleGrey;

  return (
    <View style={styles.root}>
      <Pressable style={styles.container} onPress={onPressCharacter}>
        <View>
          <FastImage
            source={{ uri: image }}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.image}
          />
          <Text style={styles.name}>{name}</Text>
        </View>
        <StatusIndicator status={status} />
        <Pressable style={styles.favoriteIcon} onPress={toggleFavorite}>
          <FavoritesIcon color={favoriteColor} />
        </Pressable>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: colors.white,
    marginVertical: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  favoriteIcon: {
    position: 'absolute',
    bottom: 0,
    right: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export { CharacterCard };

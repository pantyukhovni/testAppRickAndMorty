import { useQuery } from '@apollo/client';
import type { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useDispatch } from 'react-redux';

import { Spinner } from '@app/common/components/Spinner';
import { StatusIndicator } from '@app/common/components/StatusIndicator';
import type { RootStackParamsList } from '@app/navigation/types';
import { useIsFavorites } from '@app/store/character/selectors';
import { addFavorite, deleteFavorite } from '@app/store/character/slice';
import { colors } from '@app/styles/theme';
import { getGenderStatus } from '@app/utils/getGenderStatus';

import { GET_CHARACTER } from './query';
import type { CharacterRequest, CharacterResponse } from './types';

const CharacterScreen = () => {
  // TODO: Сделать лоудер на fastImage
  const [_, setImageLoading] = useState(true);

  const dispatch = useDispatch();

  const {
    params: { id },
  } = useRoute<RouteProp<RootStackParamsList, 'Character'>>();

  const isFavorite = useIsFavorites(id);

  const { data: { character } = {}, loading } = useQuery<
    CharacterResponse,
    CharacterRequest
  >(GET_CHARACTER, {
    variables: {
      id: +id,
    },
  });

  const {
    image,
    name,
    status = 'unknown',
    gender,
    origin: { name: originName = 'unknown' } = {},
  } = character || {};

  const onLoadStart = useCallback(() => {
    setImageLoading(true);
  }, []);

  const onLoadEnd = useCallback(() => {
    setImageLoading(false);
  }, []);

  const onPress = useCallback(() => {
    if (isFavorite) {
      dispatch(deleteFavorite({ id }));
    } else {
      dispatch(addFavorite({ id }));
    }
  }, [id, isFavorite]);

  const planetName =
    originName === 'unknown'
      ? 'Неизвестно на какой планете родился '
      : `Родился на планете ${originName}`;

  const buttonStyle: StyleProp<ViewStyle> = isFavorite
    ? {
        backgroundColor: colors.pink,
      }
    : {
        backgroundColor: colors.white,
      };

  if (loading) {
    return <Spinner size={'large'} />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageWrapper}>
        <FastImage
          source={{ uri: image }}
          resizeMode={FastImage.resizeMode.contain}
          onLoadStart={onLoadStart}
          onLoadEnd={onLoadEnd}
          style={styles.image}
        />
      </View>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.statusContainer}>
        <StatusIndicator status={status} />
        <Text style={styles.gender}>{getGenderStatus(gender)}</Text>
        <Text style={styles.planetNameText}>{planetName}</Text>
        <View style={styles.buttonWrapper}>
          <Pressable onPress={onPress} style={[styles.button, buttonStyle]}>
            <Text style={styles.buttonText}>
              {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.liteGreen,
  },
  buttonWrapper: {
    marginTop: 20,
  },
  button: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: colors.black,
  },
  imageWrapper: {
    width: '100%',
    marginTop: 50,
    alignItems: 'center',
  },
  statusContainer: {
    alignItems: 'center',
  },
  textStyle: {
    color: colors.white,
  },
  gender: {
    fontSize: 25,
  },
  planetNameText: {
    fontSize: 18,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 5,
    borderColor: colors.black,
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export { CharacterScreen };

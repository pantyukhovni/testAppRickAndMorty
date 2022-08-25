import { useIsFocused, useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback, useEffect, useState } from 'react';
import type { ListRenderItemInfo } from 'react-native';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { CharacterCard } from '@app/common/components/CharacterCard';
import { EmptyListComponent } from '@app/common/components/EmptyListComponent';
import { Spinner } from '@app/common/components/Spinner';
import type { BottomTabsParamsList } from '@app/navigation/types';
import { charactersServices } from '@app/services/characters';
import { useFavorites } from '@app/store/character/selectors';
import { resetFavorites } from '@app/store/character/slice';
import type { CharactersEntityState } from '@app/store/character/types';
import { colors } from '@app/styles/theme';
import { makeSyncFavorites } from '@app/utils/makeSyncFavorites';

const keyExtractor = (item: CharactersEntityState) => item.id;

const renderItem = ({
  item: { id },
}: ListRenderItemInfo<CharactersEntityState>) => <CharacterCard id={id} />;

const FavoritesScreen = () => {
  const [charactersList, setCharactersList] = useState<CharactersEntityState[]>(
    [],
  );

  const navigation =
    useNavigation<StackNavigationProp<BottomTabsParamsList, 'FavoritesTab'>>();

  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState<boolean>(false);

  const favoritesIds = useFavorites();

  const isFocused = useIsFocused();

  const fetchCharacters = async () => {
    setLoading(true);
    try {
      const characters = await charactersServices.fetchCharactersByIds(
        favoritesIds,
      );
      const syncFavorites = makeSyncFavorites({
        characters,
        favoritesIds,
      });

      setCharactersList(syncFavorites);
    } catch (error) {
      // TODO: вывести toast ошибки
    } finally {
      setLoading(false);
    }
  };

  const onPress = useCallback(() => {
    dispatch(resetFavorites());
  }, []);

  useEffect(() => {
    if (isFocused) {
      fetchCharacters();
    }
  }, [favoritesIds.length, isFocused]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Очистить избранное</Text>
        </Pressable>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Spinner size={'large'} />
      ) : (
        <FlatList
          data={charactersList}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ListEmptyComponent={() => <EmptyListComponent text="избранного" />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  button: {
    padding: 10,
    backgroundColor: colors.red,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: colors.white,
  },
});

export { FavoritesScreen };

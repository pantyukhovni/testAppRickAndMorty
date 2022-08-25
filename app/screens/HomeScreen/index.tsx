import React, { useCallback, useEffect } from 'react';
import type { ListRenderItemInfo } from 'react-native';
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { CharacterCard } from '@app/common/components/CharacterCard';
import { fetchCharactersAction } from '@app/store/character/actions';
import {
  useAllCharacterSelector,
  useInfo,
} from '@app/store/character/selectors';
import type { CharactersEntityState } from '@app/store/character/types';

import { FooterComponent } from './components/FooterComponent.';

const keyExtractor = (item: CharactersEntityState) => item.id;

const renderItem = ({
  item: { id },
}: ListRenderItemInfo<CharactersEntityState>) => <CharacterCard id={id} />;

const HomeScreen = () => {
  const dispatch = useDispatch();

  const charactersList = useAllCharacterSelector();

  const info = useInfo();

  const { next } = info || {};

  const fetchCharacters = useCallback(
    (nextPage?: number) => {
      // FIXME: разобраться с типами
      // @ts-ignore
      dispatch(
        fetchCharactersAction({
          ...(nextPage && { pageNumber: nextPage }),
        }),
      );
    },
    [next],
  );

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchMoreData = useCallback(() => {
    next && fetchCharacters(next);
  }, [next]);

  return (
    <View style={styles.container}>
      <FlatList
        data={charactersList}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onEndReachedThreshold={0.3}
        onEndReached={fetchMoreData}
        ListFooterComponent={FooterComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 20,
  },
});

export { HomeScreen };

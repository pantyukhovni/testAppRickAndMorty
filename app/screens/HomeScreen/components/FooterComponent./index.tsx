import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Spinner } from '@app/common/components/Spinner';
import { DataLoadingStates } from '@app/common/enums';
import { useInfo, useLoading } from '@app/store/character/selectors';

const FooterComponent = () => {
  const isLoading = useLoading();
  const info = useInfo();

  const { prev } = info || {};

  const showSpinner = isLoading === DataLoadingStates.LOADING && Boolean(prev);

  return (
    <View style={styles.container}>
      {showSpinner && <Spinner size={'small'} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: 50,
  },
});

export { FooterComponent };

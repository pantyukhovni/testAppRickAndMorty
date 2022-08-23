import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet } from 'react-native';

interface OwnProps {
  size?: number | 'small' | 'large' | undefined;
}

const { width } = Dimensions.get('window');

function Spinner({ size }: OwnProps) {
  return <ActivityIndicator size={size} style={styles.container} />;
}

export { Spinner };

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    flex: 1,
    width,
  },
});

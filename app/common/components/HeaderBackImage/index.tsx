import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ArrowLeft } from '@app/res/ArrowLeftIcon/ArrowLeft';
import { colors } from '@app/styles/theme';

interface OwnProps {
  color: string;
}

const HeaderBackImage = ({ color = colors.black }: OwnProps) => (
  <View style={styles.arrowContainer}>
    <ArrowLeft style={styles.arrowLeft} color={color} />
  </View>
);

const styles = StyleSheet.create({
  arrowContainer: {
    paddingLeft: 20,
  },
  arrowLeft: {
    marginRight: 8,
  },
});

export { HeaderBackImage };

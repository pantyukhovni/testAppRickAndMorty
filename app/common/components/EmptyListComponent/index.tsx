import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

interface OwnProps {
  text: string;
}

const { height } = Dimensions.get('window');

const EmptyListComponent = ({ text = '' }: OwnProps) => (
  <View style={styles.container}>
    <Text style={styles.text}>Список {text} пуст 😔</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height,
  },
  text: {
    fontSize: 25,
  },
});

export { EmptyListComponent };

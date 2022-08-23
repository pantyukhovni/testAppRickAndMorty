import type { ComponentType, PropsWithChildren } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

type OwnProps<T> = PropsWithChildren<T> & {
  component: ComponentType<T>;
};

const Container = <T,>({ component: Component, ...props }: OwnProps<T>) => {
  return (
    <Component {...(props as PropsWithChildren<T>)} style={styles.container} />
  );
};

export { Container };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

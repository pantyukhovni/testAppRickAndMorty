import type { StackNavigationOptions } from '@react-navigation/stack';

type BaseStackScreenOptions = {
  customHeaderTitle?: StackNavigationOptions['headerTitle'];
};

type RootStackParamsList = {
  ExampleScreen: undefined;
};

export type { RootStackParamsList, BaseStackScreenOptions };

import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import type { StackNavigationOptions } from '@react-navigation/stack';

type BaseStackScreenOptions = {
  customHeaderTitle?: StackNavigationOptions['headerTitle'];
  headerBackTitle?: StackNavigationOptions['headerBackTitle'];
  hasBackTitle?: boolean;
};

type BaseBottomOptions = {
  customHeaderTitle?: BottomTabNavigationOptions['title'];
  counterTabBarBadge?: BottomTabNavigationOptions['tabBarBadge'];
  tabBarLabel?: BottomTabNavigationOptions['tabBarLabel'];
  CustomTabBarIcon: BottomTabNavigationOptions['tabBarIcon'];
};

type RootStackParamsList = {
  Tab: undefined;
  Character: { id: string };
};

type BottomTabsParamsList = {
  FavoritesTab: undefined;
  HomeTab: undefined;
};

export type {
  RootStackParamsList,
  BaseStackScreenOptions,
  BottomTabsParamsList,
  BaseBottomOptions,
};

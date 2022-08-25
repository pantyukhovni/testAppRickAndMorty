import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { FavoritesIcon } from '@app/res/FavoritesIcon';
import { HomeIcon } from '@app/res/HomeIcon';
import { FavoritesScreen } from '@app/screens/FavoritesScreen';
import { HomeScreen } from '@app/screens/HomeScreen';
import { useFavoritesCounter } from '@app/store/character/selectors';

import type { BottomTabsParamsList } from './types';

const BottomTabsNavigation = () => {
  const favoritesCounter = useFavoritesCounter();

  const BottomTab = createBottomTabNavigator<BottomTabsParamsList>();

  const FavoritesScreenOption: BottomTabNavigationOptions = {
    ...(favoritesCounter && { tabBarBadge: favoritesCounter }),
    tabBarIcon: ({ color }) => <FavoritesIcon color={color} />,
    headerTitle: '',
    tabBarLabel: 'Избранное',
  };

  const HomeScreenOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({ color }) => <HomeIcon color={color} />,
    headerShown: false,
    tabBarLabel: 'Персонажи',
  };

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={HomeScreenOptions}
      />
      <BottomTab.Screen
        name="FavoritesTab"
        component={FavoritesScreen}
        options={FavoritesScreenOption}
      />
    </BottomTab.Navigator>
  );
};

export { BottomTabsNavigation };

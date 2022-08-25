import type { StackNavigationOptions } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { CharacterHeaderTitle } from '@app/common/components/CharacterHeaderTitle';
import { CharacterScreen } from '@app/screens/CharacterScreen';

import { BottomTabsNavigation } from './BottomNavigation';
import { getBaseStackScreenOptions } from './services/getBaseStackOptions';
import type { RootStackParamsList } from './types';

const RootStack = createStackNavigator<RootStackParamsList>();

const RootNavigation = () => {
  const tabOptions: StackNavigationOptions = getBaseStackScreenOptions();

  const characterOptions: StackNavigationOptions = {
    ...getBaseStackScreenOptions({
      customHeaderTitle: () => <CharacterHeaderTitle />,
    }),
  };

  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Tab"
        component={BottomTabsNavigation}
        options={tabOptions}
      />
      <RootStack.Screen
        name="Character"
        component={CharacterScreen}
        options={characterOptions}
      />
    </RootStack.Navigator>
  );
};

export { RootNavigation };

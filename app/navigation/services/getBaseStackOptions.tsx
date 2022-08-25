import type { StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';

import { HeaderBackImage } from '@app/common/components/HeaderBackImage';
import { colors } from '@app/styles/theme';

import type { BaseStackScreenOptions } from '../types';

const getBaseStackScreenOptions = ({
  customHeaderTitle,
  hasBackTitle = true,
  headerBackTitle = ' ',
}: BaseStackScreenOptions = {}): StackNavigationOptions => ({
  ...(Boolean(customHeaderTitle)
    ? {
        headerTitle: customHeaderTitle,
        headerTitleContainerStyle: {
          alignItems: 'center',
          width: '100%',
        },
      }
    : {
        headerShown: false,
      }),
  ...(hasBackTitle
    ? {
        headerBackTitleVisible: true,
        headerTintColor: colors.black,
        headerTitleAlign: 'center' as const,
        headerPressColorAndroid: 'transparent',
        headerBackTitle,
        headerBackImage: ({ tintColor }) => (
          <HeaderBackImage color={tintColor} />
        ),
      }
    : {
        headerBackTitleVisible: false,
      }),
});

export { getBaseStackScreenOptions };

import type { StackNavigationOptions } from '@react-navigation/stack';

import type { BaseStackScreenOptions } from '../types';

const getBaseStackScreenOptions = ({
  customHeaderTitle,
}: BaseStackScreenOptions): StackNavigationOptions => ({
  headerTitle: customHeaderTitle,
});

export { getBaseStackScreenOptions };

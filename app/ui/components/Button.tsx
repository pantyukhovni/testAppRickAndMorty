import debounce from 'lodash.debounce';
import React, { useCallback } from 'react';
import type { PressableProps } from 'react-native';
import { Pressable } from 'react-native';

import type { Merge } from '@app/common/types';

type OwnProps = Merge<
  Omit<PressableProps, 'onPress'> & {
    onPress: () => void;
    delay?: number;
  }
>;

const Button = ({ onPress, delay = 500, ...props }: OwnProps) => {
  const onPressDebounce = useCallback(debounce(onPress, delay), [delay]);

  return <Pressable {...props} onPress={onPressDebounce} />;
};

export { Button };

import React from 'react';
import { Text as RNText } from 'react-native';

import { font } from '@app/ui/constants';
import type { TextProps } from '@app/ui/types';

const Text = ({ fontWeight, fontSize, ...props }: TextProps) => (
  <RNText
    {...props}
    style={[
      props,
      {
        fontSize,
      },
      {
        ...font[fontWeight],
      },
    ]}
  />
);

export { Text };

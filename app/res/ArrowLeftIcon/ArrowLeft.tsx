import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@app/styles/theme';

interface OnwProps extends SvgProps {
  color?: string;
}

const ArrowLeft = ({ color = colors.black, ...props }: OnwProps) => {
  return (
    <Svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 11.999H20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        d="M4.00659 12.001L10.7063 5.99992"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        d="M10.6997 18L3.99999 11.9989"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export { ArrowLeft };

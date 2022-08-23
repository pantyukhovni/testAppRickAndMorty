import type { TextProps as RNTextProps, TextStyle } from 'react-native';

type FontWeight =
  | 'bold'
  | 'normal'
  | 'medium'
  | 'thin'
  | 'light'
  | 'regular'
  | 'black';

type Font = {
  [weight in FontWeight]: {
    fontFamily: FontFamily;
    fontWeight: TextStyle['fontWeight'];
  };
};

type FontFamily =
  | 'Roboto-Thin'
  | 'Roboto-Medium'
  | 'Roboto-Light'
  | 'Roboto-Bold'
  | 'Roboto'
  | 'Roboto-Regular'
  | 'Roboto-Black';

interface TextProps
  extends RNTextProps,
    Omit<TextStyle, 'fontWeight' | 'fontSize'> {
  fontSize: number;
  fontWeight: FontWeight;
}

export type { FontWeight, Font, FontFamily, TextProps };

import type { Theme } from '@react-navigation/native';

const colors = {
  black: '#000000',
  white: '#ffffff',
  primary: '#FF2D55',
  pink: '#EA358C',
  paleGrey: '#c4c4c4',
  liteGreen: '#97ce4c',
  green: '#55cc44',
  red: '#d63d2e',
};

// TODO: переделать на hex, добавить тему
const MyTheme: Theme = {
  dark: false,
  colors: {
    primary: colors.primary,
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export { MyTheme, colors };

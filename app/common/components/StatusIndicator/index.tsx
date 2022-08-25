import React from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@app/styles/theme';
import { isAliveCharacter } from '@app/utils/getLifeStatus';
import type { CharacterStatus } from '@app/utils/types';

interface OwnProps {
  status: CharacterStatus;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const StatusIndicator = ({ status, style, textStyle }: OwnProps) => {
  const isAlive = isAliveCharacter(status);

  const baseStyles: StyleProp<ViewStyle> = {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: isAliveCharacter(status) ? colors.green : colors.red,
    marginRight: 5,
  };

  return (
    <View style={[styles.container, style]}>
      <View style={baseStyles} />
      <Text style={[styles.text, textStyle]}>
        {isAlive ? 'Живой' : 'Мертвый'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: colors.black,
    fontSize: 18,
  },
});

export { StatusIndicator };

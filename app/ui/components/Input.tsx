import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import type { TextInputMaskProps } from 'react-native-text-input-mask';
import TextInputMask from 'react-native-text-input-mask';

interface OwnProps extends TextInputMaskProps {
  mask?: string;
}

const Input = ({ mask, ...props }: OwnProps) => {
  const TextInput = mask ? TextInputMask : RNTextInput;

  return <TextInput {...props} mask={mask} />;
};

export { Input };

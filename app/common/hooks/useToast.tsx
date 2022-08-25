import type { TextStyle } from 'react-native';
import type { ToastPosition } from 'react-native-toast-message';
import Toast from 'react-native-toast-message';

import type { ToastKeys } from '../types/toast';

interface OnwProps {
  text: string;
  onHide?: () => void;
  onShow?: () => void;
  text2?: string;
  type?: ToastKeys;
  visibilityTime?: number;
  onPress?: () => void;
  textStyle?: TextStyle;
  position?: ToastPosition;
}

const useToast = () => {
  const showToast = ({
    text,
    text2,
    type = 'baseToast',
    visibilityTime = 4000,
    position = 'bottom',
    onPress,
    onHide,
    onShow,
  }: OnwProps) => {
    if (text) {
      Toast.show({
        type,
        text1: text,
        text2,
        position,
        visibilityTime,
        onPress,
        onShow,
        onHide,
      });
    }
  };

  const hideToast = () => {
    Toast.hide();
  };

  return [showToast, hideToast];
};

export { useToast };

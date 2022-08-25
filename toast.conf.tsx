import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { ToastConfigParams } from 'react-native-toast-message';

import type { ToastConfig } from '@app/common/types/toast';

const BaseToast = <T,>({ text1 }: Pick<ToastConfigParams<T>, 'text1'>) => (
  <View style={[styles.viewToast, { justifyContent: 'flex-start' }]}>
    <Text style={styles.baseToastText}>{text1}</Text>
  </View>
);

const ErrorToast = <T,>({ text1 }: Pick<ToastConfigParams<T>, 'text1'>) => (
  <View style={[styles.viewToast, { justifyContent: 'space-around' }]}>
    <Text style={[styles.baseToastText]}>{text1}</Text>
  </View>
);

const toastConf: ToastConfig = {
  baseToast: ({ text1 }) => <BaseToast text1={text1} />,
  errorToast: ({ text1 }) => <ErrorToast text1={text1} />,
};

export { toastConf };

const styles = StyleSheet.create({
  viewToast: {
    minHeight: 60,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#000',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  baseToastText: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'left',
  },
  buttonToastText: {
    fontSize: 15,
    width: '100%',
    textAlign: 'left',
  },
});

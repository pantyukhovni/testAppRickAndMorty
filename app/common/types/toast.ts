import type React from 'react';
import type { ToastConfigParams } from 'react-native-toast-message';

type ToastKeys = 'baseToast' | 'errorToast';

type ToastConfig<T = unknown> = {
  [K in ToastKeys]: (params: ToastConfigParams<T>) => React.ReactNode;
};

export type { ToastKeys, ToastConfig };

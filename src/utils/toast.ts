import Toast from 'react-native-toast-message';
import { STRINGCONSTANT } from '../constant/stringConstant';

export const ToastService = {
  success(title: string, message?: string) {
    Toast.show({
      type: STRINGCONSTANT.TOAST.SUCCESS,
      text1: title,
      text2: message,
      position:'bottom',
    });
  },

  error(title: string, message?: string) {
    Toast.show({
      type: STRINGCONSTANT.TOAST.ERROR,
      text1: title,
      text2: message,
      position:'bottom',
    });
  },

  info(title: string, message?: string) {
    Toast.show({
      type: STRINGCONSTANT.TOAST.INFO,
      text1: title,
      text2: message,
      position:'bottom',
    });
  },
};

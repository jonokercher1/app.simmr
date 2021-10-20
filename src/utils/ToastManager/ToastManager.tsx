import React, { Component } from 'react';
import Toast from 'react-native-toast-message';

export default class ToastManager extends Component {
  static showErrorToast (message: string) {
    return Toast.show({
      type: 'error',
      text1: 'Error',
      text2: message,
    });
  }

  static showSuccessToast (message: string) {
    return Toast.show({
      type: 'success',
      text1: 'Success',
      text2: message,
    });
  }

  render() {
    return (
      <Toast
        ref={ref => Toast.setRef(ref)}
        topOffset={60}
      />
    );
  }
}



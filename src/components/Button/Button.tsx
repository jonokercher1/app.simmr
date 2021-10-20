import React, { FC } from 'react';
import { Button as NativeButton, View } from 'react-native';
import styles from './Button.style';

const Button: FC = () => {
  const onPress = () => {
    console.log('clicked');
  };

  return (
    <View style={styles.wrap}>
      <NativeButton onPress={onPress} title="hello world" />
    </View>
  );
};

export default Button;

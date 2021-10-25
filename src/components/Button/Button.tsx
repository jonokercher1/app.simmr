import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './Button.style';
import Body from '../Typography/Body/Body';

interface ButtonProps {
  state: 'PRIMARY' | 'SECONDARY';
  onPress: () => void;
  buttonText: string;
  loading?: boolean;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ state, onPress, buttonText, loading, disabled }) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[styles.button, (styles as any)[state.toLowerCase()]]}
  >
    {loading && <Body>loading...</Body>}
    <Body
      style={[
        styles.buttonText,
        state === 'SECONDARY' && styles.buttonSecondaryText,
      ]}
    >
      {buttonText}
    </Body>
  </TouchableOpacity>
);

export default Button;

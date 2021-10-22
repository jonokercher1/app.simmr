import React, { FC, useState, useEffect } from 'react';
import { TextInput, TextInputProps, View, Text, TouchableOpacity } from 'react-native';
import { Control, Controller, FieldError } from 'react-hook-form';
import Icon from 'react-native-remix-icon';
import styles from './Input.style';
import { COLOUR } from '../../utils/GlobalStyles/GlobalStyles';

interface InputProps extends TextInputProps {
  control: Control<any>;
  name: string;
  error?: FieldError;
  rules?: any;
}

const Input: FC<InputProps> = ({ control, name, rules, error, ...props }) => {
  const [showValue, setShowValue] = useState(true);

  useEffect(() => {
    if (props.secureTextEntry) {
      setShowValue(false);
    }
  }, [props.secureTextEntry]);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={props.defaultValue}
      render={({ field: { onChange, value } }) => (
        <View>
          <TextInput
            onChangeText={onChange}
            value={value}
            style={[styles.input, props.secureTextEntry && styles.secureInput]}
            placeholderTextColor={COLOUR.NEUTRAL_DARK}
            {...props}
            secureTextEntry={showValue}
          />

          {props.secureTextEntry && (
            <View style={styles.secureToggle}>
              <TouchableOpacity onPress={() => setShowValue(!showValue)}>
                <Icon
                  name={showValue ? 'eye-line' : 'eye-off-line'}
                  color={COLOUR.DARK}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          )}

          {error && (
            <Text style={styles.error}>{error.message}</Text>
          )}
        </View>
      )}
    />
  );
};

export default Input;

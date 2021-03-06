import React, { FC, useState, useEffect } from 'react';
import { TextInput, TextInputProps, View, Text, TouchableOpacity } from 'react-native';
import { Control, Controller, FieldError } from 'react-hook-form';
import Icon from 'react-native-remix-icon';
import styles from './Input.style';
import { COLOUR } from '../../utils/GlobalStyles/GlobalStyles';

interface InputProps extends TextInputProps {
  styleType?: 'FULL' | 'MINIMAL';
  control: Control<any>;
  name: string;
  error?: FieldError;
  rules?: any;
}

const Input: FC<InputProps> = ({ control, name, rules, error, styleType, ...props }) => {
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
            style={[
              styles.input,
              styleType === 'MINIMAL' && styles.minimalInput,
              props.secureTextEntry && styles.secureInput,
            ]}
            placeholderTextColor={COLOUR.NEUTRAL_DARK}
            {...props}
            autoCapitalize="none"
            placeholder={props?.placeholder?.toLowerCase()}
            secureTextEntry={!showValue}
          />

          {props.secureTextEntry && (
            <View style={styles.secureToggle}>
              <TouchableOpacity onPress={() => setShowValue(!showValue)}>
                <Icon
                  name={showValue ? 'eye-off-line' : 'eye-line'}
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

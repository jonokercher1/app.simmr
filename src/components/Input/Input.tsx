import React, { FC } from 'react';
import { TextInput, TextInputProps, View, Text } from 'react-native';
import { Control, Controller, FieldError } from 'react-hook-form';

interface InputProps extends TextInputProps {
  control: Control<any>;
  name: string;
  error?: FieldError;
  rules?: any;
  label?: string;
}

const Input: FC<InputProps> = ({ control, name, rules, error, label, ...props }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={props.defaultValue}
      render={({ field: { onChange, value } }) => (
        <View>
          {label && <Text>{label}</Text>}

          <TextInput
            onChangeText={onChange}
            value={value}
            {...props}
          />

          {error && <Text>{error.message}</Text>}
        </View>
      )}
    />
  );
};

export default Input;

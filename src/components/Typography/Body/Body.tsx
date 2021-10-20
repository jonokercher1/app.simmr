import React, { FC } from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';
import { FONT_SIZE } from '../../../utils/GlobalStyles/GlobalStyles';
import parentStyles from '../Typography.style';
import styles from './Body.style';

interface BodyTypographyProps {
  fontSize?: FONT_SIZE;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
}

const Body: FC<BodyTypographyProps> = ({ children, fontSize, style, numberOfLines }) => (
  <Text
    style={[
      parentStyles.main,
      styles.body,
      style,
      fontSize ? { fontSize } : undefined,
    ]}
    numberOfLines={numberOfLines}
  >
    {children}
  </Text>
);

export default Body;

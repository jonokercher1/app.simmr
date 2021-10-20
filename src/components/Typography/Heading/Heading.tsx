import React, { FC } from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';
import { FONT_SIZE } from '../../../utils/GlobalStyles/GlobalStyles';
import parentStyles from '../Typography.style';
import styles from './Heading.style';

interface HeadingTypographyProps {
  fontSize?: FONT_SIZE;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
}

const Heading: FC<HeadingTypographyProps> = ({ children, fontSize, style, numberOfLines }) => (
  <Text
    style={[
      parentStyles.main,
      styles.heading,
      style,
      fontSize ? { fontSize } : undefined,
    ]}
    numberOfLines={numberOfLines}
  >
    {children}
  </Text>
);

export default Heading;

import React, { FC } from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';
import { FONT_SIZE } from '../../../utils/GlobalStyles/GlobalStyles';
import parentStyles from '../Typography.style';
import styles from './SubText.style';

interface SubTextTypographyProps {
  fontSize?: FONT_SIZE;
  style?: StyleProp<TextStyle>;
}

const SubText: FC<SubTextTypographyProps> = ({ children, fontSize, style }) => (
  <Text
    style={[
      parentStyles.main,
      styles.subText,
      style,
      fontSize ? { fontSize } : undefined,
    ]}
  >
    {children}
  </Text>
);

export default SubText;

import React, { FC } from 'react';
import { View } from 'react-native';
import Heading from '../Typography/Heading/Heading';
import styles from './ScreenHeader.style';

interface ScreenHeaderProps {
  title: string;
  rightAction?: JSX.Element;
}

const ScreenHeader: FC<ScreenHeaderProps> = ({ title, rightAction }) => (
  <View style={styles.wrap}>
    <Heading style={styles.title}>{title}</Heading>

    {rightAction}
  </View>
);

export default ScreenHeader;

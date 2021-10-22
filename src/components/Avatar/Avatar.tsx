import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import AvatarGenerator from 'react-native-boring-avatars';
import styles from './Avatar.style';

interface AvatarProps {
  size: 'SMALL' | 'LARGE';
  name?: string;
}

const colours = ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'];

export const AVATAR_SMALL_HEIGHT = 35;
export const AVATAR_LARGE_HEIGHT = 60;

const Avatar: FC<AvatarProps> = ({ size, name }) => {
  const avatarHeight = useMemo(() => {
    switch (size) {
      case 'SMALL':
        return AVATAR_SMALL_HEIGHT;

      case 'LARGE':
        return AVATAR_LARGE_HEIGHT;
    }
  }, [size]);

  if (!name) {
    return (
      <View
        style={[
          styles.empty,
          (styles as any)[size.toLowerCase()],
        ]}
      />
    );
  }

  return (
    <AvatarGenerator
      size={avatarHeight}
      name={name}
      variant="beam"
      colors={colours}
    />
  );
};

export default Avatar;

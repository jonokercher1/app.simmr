import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { COLOUR } from '../../utils/GlobalStyles/GlobalStyles';
import styles from './TabBar.style';

interface Route {
  key: string;
  name: string;
  isFocused?: boolean;
}

const TabBar: FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const onPress = (route: Route) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!route.isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  const onLongPress = (route: Route) => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          return (
            <TouchableOpacity
              onPress={() => onPress({ ...route, isFocused })}
              onLongPress={() => onLongPress(route)}
              disabled={isFocused}
              style={styles.icon}
              key={index}
            >
              {options.tabBarIcon && (
                options.tabBarIcon({
                  focused: isFocused,
                  color: isFocused ? COLOUR.HIGHLIGHT : COLOUR.NEUTRAL_MID,
                  size: 32,
                })
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default TabBar;

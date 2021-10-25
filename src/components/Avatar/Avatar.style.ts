import { StyleSheet } from 'react-native';
import { COLOUR } from '../../utils/GlobalStyles/GlobalStyles';

export const AVATAR_SMALL_HEIGHT = 35;
export const AVATAR_LARGE_HEIGHT = 60;

export default StyleSheet.create({
  empty: {
    backgroundColor: COLOUR.NEUTRAL_LIGHT,
  },
  small: {
    borderRadius: AVATAR_SMALL_HEIGHT ? AVATAR_SMALL_HEIGHT / 2 : 0,
    height: AVATAR_SMALL_HEIGHT,
    width: AVATAR_SMALL_HEIGHT,
  },
  large: {
    borderRadius: AVATAR_LARGE_HEIGHT ? AVATAR_LARGE_HEIGHT / 2 : 0,
    height: AVATAR_LARGE_HEIGHT,
    width: AVATAR_LARGE_HEIGHT,
  },
});

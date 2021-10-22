import { StyleSheet } from 'react-native';
import { COLOUR } from '../../utils/GlobalStyles/GlobalStyles';
import { AVATAR_LARGE_HEIGHT, AVATAR_SMALL_HEIGHT } from './Avatar';

export default StyleSheet.create({
  empty: {
    backgroundColor: COLOUR.NEUTRAL_LIGHT,
  },
  small: {
    borderRadius: AVATAR_SMALL_HEIGHT / 2,
    height: AVATAR_SMALL_HEIGHT,
    width: AVATAR_SMALL_HEIGHT,
  },
  large: {
    borderRadius: AVATAR_LARGE_HEIGHT / 2,
    height: AVATAR_LARGE_HEIGHT,
    width: AVATAR_LARGE_HEIGHT,
  },
});

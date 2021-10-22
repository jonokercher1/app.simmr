import { StyleSheet } from 'react-native';
import { COLOUR, FONT_SIZE } from '../../utils/GlobalStyles/GlobalStyles';

export default StyleSheet.create({
  input: {
    backgroundColor: COLOUR.NEUTRAL_LIGHTEST,
    color: COLOUR.DARK,
    paddingVertical: 18,
    paddingHorizontal: 18,
    fontSize: FONT_SIZE.BODY,
  },
  secureInput: {
    paddingRight: 60,
  },
  error: {
    color: COLOUR.ERROR,
    position: 'absolute',
    bottom: -24,
    left: 0,
  },
  secureToggle: {
    position: 'absolute',
    right: 20,
    top: 18,
  },
});

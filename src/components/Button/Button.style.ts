import { StyleSheet } from 'react-native';
import { COLOUR, ShadowGenerator } from '../../utils/GlobalStyles/GlobalStyles';

export default StyleSheet.create({
  button: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  primary: {
    backgroundColor: COLOUR.PRIMARY,
    ...ShadowGenerator.defaultShadow(),
    shadowColor: COLOUR.PRIMARY,
  },
  secondary: {
    borderWidth: 2,
    borderColor: COLOUR.HIGHLIGHT,
  },
  buttonText: {
    color: COLOUR.NEUTRAL_LIGHTEST,
    fontSize: 18,
  },
  buttonSecondaryText: {
    color: COLOUR.HIGHLIGHT,
  },
});

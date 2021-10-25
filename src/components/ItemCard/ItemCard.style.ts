import { StyleSheet } from 'react-native';
import { COLOUR, ShadowGenerator } from '../../utils/GlobalStyles/GlobalStyles';

export default StyleSheet.create({
  wrap: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  quantity: {
    color: COLOUR.NEUTRAL_DARK,
    marginTop: 6,
  },
  focused: {
    paddingVertical: 20,
    paddingHorizontal: 18,
    borderRadius: 18,
    backgroundColor: COLOUR.LIGHT,
    ...ShadowGenerator.defaultShadow(),
  },
});

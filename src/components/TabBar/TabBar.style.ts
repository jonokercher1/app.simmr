import { Dimensions, StyleSheet } from 'react-native';
import { COLOUR, ShadowGenerator } from '../../utils/GlobalStyles/GlobalStyles';

export default StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    bottom: 40,
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
  icon: {
    alignItems: 'center',
    flex: 1,
  },
  container: {
    alignItems:'center',
    backgroundColor: COLOUR.LIGHT,
    borderRadius: 12,
    flexDirection: 'row',
    height: 50,
    justifyContent:'center',
    maxWidth: Dimensions.get('screen').width * 0.8,
    paddingVertical: 34,
    ...ShadowGenerator.defaultShadow(),
  },
});

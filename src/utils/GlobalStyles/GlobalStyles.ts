import { DefaultTheme, Theme } from '@react-navigation/native';

export enum COLOUR {
  LIGHT = '#FFFFFF',
  DARK = '#16192B',
  PRIMARY = '#4B30F5',
  SECONDARY = '#50B5F8',
  HIGHLIGHT = '#ED722E',
  NEUTRAL_DARK = '#93959D',
  NEUTRAL_MID = '#D0D2D9',
  NEUTRAL_LIGHT = '#EFEFEF',
  NEUTRAL_LIGHTEST = '#F5F5F7',
  ERROR = '#E63946',
  SUCCESS = '#2A9D8F',
  WARNING = '#FCBF49',
  INFO = '#457B9D',
}

export enum FONT_SIZE {
  HEADING = 36,
  BODY = 18
}

export const AppTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLOUR.LIGHT,
  },
};

export class ShadowGenerator {
  static defaultShadow() {
    return {
      shadowColor: COLOUR.NEUTRAL_DARK,
    shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.5,
      elevation: 4,
    };
  }
}

export const colors = {
  darkBlue: '#073B4C',
  lightBlue: '#15d4d8',
  blue: '#4a54df',
  green: '#0FC395',
  attentionYellow: '#FFD166',
  yellow: '#F2C150',
  darkYellow: '#C19735',
  errorRed: '#EF476F',
  red: '#EB5757',
  pink: '#EB6887',
  orange: '#F2994A',
  lightRed: '#FEF6F8',
  black: '#1F292E',
  darkGrey: '#415058',
  midGrey: '#81888B',
  lightGrey: '#C8CDD0',
  grey: '#A9ABAC',
  white: '#F2F2F3',
  clear: '#ffffff',
  transparent: '#00000000',
};

export const fontFamily = {
  /** @const {Montserrat-Bold} */
  bold: 'Montserrat-Bold',

  /** @const {Montserrat-Light} */
  light: 'Montserrat-Light',

  /** @const {Montserrat-Medium} */
  medium: 'Montserrat-Medium',

  /** @const {Montserrat-Regular} */
  regular: 'Montserrat-Regular',

  /** @const {Montserrat-SemiBold} */
  semibold: 'Montserrat-SemiBold',
};

export type FontType = keyof typeof fontFamily;

export const fontFiles = {
  [fontFamily.bold]: require('../assets/fonts/Roboto-Bold.ttf'),
  [fontFamily.regular]: require('../assets/fonts/Roboto-Regular.ttf'),
};

export const fontSizes = {
  /** @const {10} */
  xs: 10,

  /** @const {12} */
  sm: 12,

  /** @const {14} */
  md: 14,

  /** @const {16} */
  md2: 16,

  /** @const {18} */
  lg: 18,

  /** @const {20} */
  lg2: 20,

  /** @const {22} */
  xl: 22,

  /** @const {24} */
  xl2: 24,

  /** @const {32} */
  xxl: 32,

  /** @const {42} */
  xxxl: 42,
};

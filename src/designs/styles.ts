import { Fonts } from './fonts';

type CustomTextStyle = {
  fontFamily: Fonts;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
};
type TextStyles = Record<string, CustomTextStyle>;

export const textStyles: TextStyles = {
  h1: { fontFamily: 'DMSans-Medium', fontSize: 26, lineHeight: 36, letterSpacing: -0.5 },
  h2: { fontFamily: 'DMSans-Medium', fontSize: 22, lineHeight: 30, letterSpacing: -0.5 },
  h3: { fontFamily: 'Mulish-Bold', fontSize: 22, lineHeight: 30, letterSpacing: 0 },
  h4: { fontFamily: 'Mulish-SemiBold', fontSize: 18, lineHeight: 22, letterSpacing: 0 },
  h5: { fontFamily: 'Mulish-SemiBold', fontSize: 16, lineHeight: 22, letterSpacing: 0 },
  subtitle1: { fontFamily: 'Mulish-SemiBold', fontSize: 18, lineHeight: 28, letterSpacing: 0 },
  subtitle2: { fontFamily: 'Mulish-SemiBold', fontSize: 16, lineHeight: 26, letterSpacing: 0 },
  subtitle3: { fontFamily: 'Mulish-SemiBold', fontSize: 14, lineHeight: 22, letterSpacing: 0 },
  body1: { fontFamily: 'Mulish-Medium', fontSize: 16, lineHeight: 28, letterSpacing: 0 },
  body2: { fontFamily: 'Mulish-Medium', fontSize: 14, lineHeight: 24, letterSpacing: 0 },
  caption1: { fontFamily: 'Mulish-Regular', fontSize: 15, lineHeight: 24, letterSpacing: 0 },
  caption2: { fontFamily: 'Mulish-Medium', fontSize: 14, lineHeight: 20, letterSpacing: 0 },
  caption3: { fontFamily: 'Mulish-Regular', fontSize: 12, lineHeight: 22, letterSpacing: 0 },
  smallButton: { fontFamily: 'Mulish-SemiBold', fontSize: 14, lineHeight: 22, letterSpacing: 0 },
  mediumButton: { fontFamily: 'Mulish-SemiBold', fontSize: 16, lineHeight: 22, letterSpacing: 0 },
  extraButton: { fontFamily: 'Mulish-ExtraBold', fontSize: 16, lineHeight: 22, letterSpacing: 0 },
  priceSmall: { fontFamily: 'Mulish-Bold', fontSize: 14, lineHeight: 20, letterSpacing: 0 },
  priceMedium: { fontFamily: 'Mulish-ExtraBold', fontSize: 16, lineHeight: 20, letterSpacing: 0 },
  priceLarge: { fontFamily: 'Mulish-ExtraBold', fontSize: 24, lineHeight: 20, letterSpacing: 0 },
  cardDetailsSmall: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
  },
  cardDetailsLarge: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0,
  },
  inputLabelIntern: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0,
  },
  inputLabelDefault: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0,
  },
  inputLabelExternal: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 13,
    lineHeight: 16,
    letterSpacing: 0,
  },
  inputLabelPlaceholder: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0,
  },
  inputPlaceholderActive: {
    fontFamily: 'Mulish-Medium',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0,
  },
  inputPlaceholderDefault: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0,
  },
};

export type TextVariant = keyof typeof textStyles;

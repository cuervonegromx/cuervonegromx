/* eslint-disable prefer-destructuring */
import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider as TP } from 'styled-components';

import { theme } from '../../utils';

const breakpoints = [
  `${theme.BreakpointMobileMedium}px`,
  `${theme.BreakpointMobileLarge}px`,
  `${theme.BreakpointTablet}px`,
  `${theme.BreakpointDesktopMedium}px`,
  `${theme.BreakpointDesktopLarge}px`,
];

breakpoints.mobileM = breakpoints[0];
breakpoints.mobileL = breakpoints[1];
breakpoints.tablet = breakpoints[2];
breakpoints.desktopM = breakpoints[3];
breakpoints.desktopL = breakpoints[4];

const defaultColors = {
  blueLight: `${theme.PaletteBlueLight}`,
  blueNormal: `${theme.PaletteBlueNormal}`,
  blueDark: `${theme.PaletteBlueDark}`,
  greenLight: `${theme.PaletteGreenLight}`,
  greenNormal: `${theme.PaletteGreenNormal}`,
  greenDark: `${theme.PaletteGreenDark}`,
  productLight: `${theme.PaletteProductLight}`,
  productNormal: `${theme.PaletteProductNormal}`,
  productDark: `${theme.PaletteProductDark}`,
  orangeLight: `${theme.PaletteOrangeLight}`,
  orangeNormal: `${theme.PaletteOrangeNormal}`,
  orangeDark: `${theme.PaletteOrangeDark}`,
  redLight: `${theme.PaletteRedLight}`,
  redNormal: `${theme.PaletteRedNormal}`,
  redDark: `${theme.PaletteRedDark}`,
  white: `${theme.PaletteWhite}`,
};

const lightColors = {
  cloudDark: `${theme.PaletteCloudPrimaryDark}`,
  cloudLight: `${theme.PaletteCloudPrimaryNormal}`,
  cloudNormal: `${theme.PaletteCloudPrimaryLight}`,
  inkDark: `${theme.PaletteInkPrimaryDark}`,
  inkLight: `${theme.PaletteInkPrimaryLight}`,
  inkNormal: `${theme.PaletteInkPrimaryNormal}`,
  ...defaultColors,
};

const fontSizes = [
  theme.FontSizeTextSmall,
  theme.FontSizeTextNormal,
  theme.FontSizeTextLarge,
  theme.FontSizeHeadingTitle2,
  theme.FontSizeHeadingTitle1,
  theme.FontSizeHeadingDisplay,
];

const sizes = [
  0,
  theme.SpaceXxxSmall,
  theme.SpaceXxSmall,
  theme.SpaceXSmall,
  theme.SpaceSmall,
  theme.SpaceMedium,
  theme.SpaceLarge,
  theme.SpaceXLarge,
  theme.SpaceXxLarge,
  theme.SpaceXxxLarge,
];

const shadows = {
  action: theme.BoxShadowAction,
  actionActive: theme.BoxShadowActionActive,
  actionable: theme.BoxShadowActionable,
  fixed: theme.BoxShadowFixed,
  fixedReverse: theme.BoxShadowFixedReverse,
  elevatedLevel1: theme.BoxShadowElevatedLevel1,
  modal: theme.BoxShadowModal,
  overlay: theme.BoxShadowOverlay,
  raised: theme.BoxShadowRaised,
  raisedReverse: theme.BoxShadowRaisedReverse,
};

const zIndices = [
  theme.ZIndexDefault,
  theme.ZIndexModal,
  theme.ZIndexModalOverlay,
  theme.ZIndexOnTheTop,
  theme.ZIndexSticky,
];

const ThemeProvider = ({ children }) => {
  return (
    <TP theme={{ breakpoints, colors: lightColors, fontSizes, sizes, shadows, zIndices }}>
      {children}
    </TP>
  );
};

ThemeProvider.defaultProps = {
  children: null,
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;

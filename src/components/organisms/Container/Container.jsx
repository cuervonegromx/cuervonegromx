import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from '../../atoms/Box/Box';

const Container = styled(Box).attrs(({ theme, fluid }) => ({
  mx: 'auto',
  ...fluid ? {
    width: '100%',
  } : {
    width: {
      _: '100%',
      mobileM: `calc(${theme.breakpoints.mobileM} - 8px)`,
      mobileL: `calc(${theme.breakpoints.mobileL} - 8px)`,
      tablet: `calc(${theme.breakpoints.tablet} - 16px)`,
      desktopM: `calc(${theme.breakpoints.desktopM} - 16px)`,
      desktopL: `calc(${theme.breakpoints.desktopL} - 32px)`,
    },
  },
}))``;

Container.defaultProps = {
  children: null,
  fluid: false,
};

Container.propTypes = {
  ...Box.propTypes,
  children: PropTypes.node,
  fluid: PropTypes.bool,
};

export default Container;

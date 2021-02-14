/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { border, compose, layout, space, variant } from 'styled-system';
import css from '@styled-system/css';
import StyledPropTypes from '@styled-system/prop-types';

import Text from '../Text/Text';

const StyledButton = styled.button(
  css({
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: [2],
    paddingLeft: [3],
    paddingRight: [3],
    paddingBottom: [2],
    borderRadius: [2],
    boxShadow: 'action',
    lineHeight: '24px',
  }),
  compose(
    border,
    layout,
    space,
  ),
  variant({
    variants: {
      default: {
        color: 'inkNormal',
        bg: 'cloudNormal',
        '&:hover': {
          bg: 'cloudLight',
          cursor: 'pointer',
        },
      },
      primary: {
        color: 'white',
        bg: 'productNormal',
        '&:hover': {
          bg: 'productLight',
          cursor: 'pointer',
        },
      },
      info: {
        color: 'white',
        bg: 'blueNormal',
        '&:hover': {
          bg: 'blueDark',
          cursor: 'pointer',
        },
      },
      success: {
        color: 'white',
        bg: 'greenNormal',
        '&:hover': {
          bg: 'greenLight',
          cursor: 'pointer',
        },
      },
      warning: {
        color: 'white',
        bg: 'orangeNormal',
        '&:hover': {
          bg: 'orangeLight',
          cursor: 'pointer',
        },
      },
      critical: {
        color: 'white',
        bg: 'redNormal',
        '&:hover': {
          bg: 'redLight',
          cursor: 'pointer',
        },
      },
    },
  }),
);

const Button = React.forwardRef(({ children, isLink, ...rest }, ref) => {
  const content = (
    <>
      <Text display="inline-flex" alignItems="center">{children}</Text>
    </>
  );
  const ButtonComponent = isLink ? 'a' : 'button';
  return (
    <StyledButton as={ButtonComponent} ref={ref} {...rest}>{content}</StyledButton>
  );
});

Button.defaultProps = {
  isLink: false,
  variant: 'default',
};

Button.propTypes = {
  ...StyledPropTypes.space,
  children: PropTypes.node.isRequired,
  isLink: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'primary', 'info', 'success', 'warning', 'critical']),
};

export default Button;

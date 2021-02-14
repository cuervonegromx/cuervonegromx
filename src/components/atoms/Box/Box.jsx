import styled from 'styled-components';
import {
  background,
  border,
  color,
  compose,
  display,
  flexbox,
  layout,
  position,
  space,
  shadow,
  typography,
} from 'styled-system';
import PropTypes from '@styled-system/prop-types';

const Box = styled.div(
  compose(
    background,
    border,
    color,
    display,
    flexbox,
    layout,
    position,
    space,
    shadow,
    typography,
  ),
);

Box.propTypes = {
  ...PropTypes.background,
  ...PropTypes.border,
  ...PropTypes.color,
  ...PropTypes.display,
  ...PropTypes.flexbox,
  ...PropTypes.layout,
  ...PropTypes.position,
  ...PropTypes.space,
  ...PropTypes.shadow,
  ...PropTypes.typography,
};

export default Box;

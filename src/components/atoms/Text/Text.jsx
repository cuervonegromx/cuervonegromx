import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledPropTypes from '@styled-system/prop-types';
import {
  color,
  compose,
  display,
  shadow,
  space,
  textAlign,
  typography,
} from 'styled-system';

const Text = styled.span(
  compose(
    color,
    display,
    shadow,
    space,
    textAlign,
    typography,
  ),
);

Text.defaultProps = {
  whiteSpace: 'normal',
};

Text.propTypes = {
  ...StyledPropTypes.color,
  ...StyledPropTypes.display,
  ...StyledPropTypes.shadow,
  ...StyledPropTypes.space,
  ...StyledPropTypes.typography,
  whiteSpace: PropTypes.oneOf(['normal', 'nowrap', 'pre-wrap', 'pre', 'pre-line']),
};

export default Text;

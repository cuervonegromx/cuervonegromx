import styled from 'styled-components';
import { grid } from 'styled-system';
import PropTypes from '@styled-system/prop-types';

import Box from '../../atoms/Box/Box';

const Grid = styled(Box)`
  ${grid};
`;

Grid.defaultProps = {
  display: 'grid',
};

Grid.propTypes = {
  ...Box.propTypes,
  ...PropTypes.grid,
};

export default Grid;

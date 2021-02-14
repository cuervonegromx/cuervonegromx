import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Box from '../../atoms/Box/Box';
import Text from '../../atoms/Text/Text';
import Flex from '../Flex/Flex';

const Section = ({ description, image, title }) => (
  <Box as="section" my={[5]} py={[5]}>
    <Flex flexDirection={{ _: 'column', tablet: 'row' }}>
      <Box mx="auto" width={{ _: '100%', tablet: '75%' }} textAlign="center">
        <Img fluid={image} />
        <Text as="h3" mb={[3]} fontSize="5">{title}</Text>
        <Text as="p">{description}</Text>
      </Box>
    </Flex>
  </Box>
);

Section.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;

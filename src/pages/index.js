import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { useIntl } from 'react-intl';

import Box from '../components/atoms/Box/Box';
import Text from '../components/atoms/Text/Text';
import Container from '../components/organisms/Container/Container';
import Flex from '../components/organisms/Flex/Flex';
import Section from '../components/organisms/Section/Section';

const HomePage = () => {
  const { formatMessage } = useIntl();
  const data = useStaticQuery(graphql`{
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photo_sharing: file(relativePath: { eq: "photo_sharing.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    progressive_app: file(relativePath: { eq: "progressive_app.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    scrum_board: file(relativePath: { eq: "scrum_board.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    startup_life: file(relativePath: { eq: "startup_life.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    work_together: file(relativePath: { eq: "work_together.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`);
  return (
    <>
      <Box as="header">
        <Container>
          <Flex mt={[4]} flexDirection={{ _: 'column', tablet: 'row' }}>
            <Box px={[3]} width={{ _: '100%', tablet: '50%' }}>
              <Box mb={[3]} width="75%">
                <Img fluid={data.logo !== null && data.logo.childImageSharp.fluid} />
              </Box>
              <Text as="p">{formatMessage({ id: 'Brand:Description' })}</Text>
            </Box>
            <Box width={{ _: '100%', tablet: '50%' }}>
              <Img fluid={data.work_together !== null && data.work_together.childImageSharp.fluid} />
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box as="main">
        <Container>
          <Section
            image={data.photo_sharing !== null ? data.photo_sharing.childImageSharp.fluid : data.photo_sharing}
            title={formatMessage({ id: 'DigitalContent:Title' })}
            description={formatMessage({ id: 'DigitalContent:Description' })}
          />
          <Section
            image={data.scrum_board !== null ? data.scrum_board.childImageSharp.fluid : data.scrum_board}
            title={formatMessage({ id: 'InformationTechnologies:Title' })}
            description={formatMessage({ id: 'InformationTechnologies:Description' })}
          />
          <Section
            image={data.startup_life !== null ? data.startup_life.childImageSharp.fluid : data.startup_life}
            title={formatMessage({ id: 'SoftwareDevelopment:Title' })}
            description={formatMessage({ id: 'SoftwareDevelopment:Description' })}
          />
        </Container>
      </Box>
      <Box as="footer" p={[3]}>
        <Container>
          <Flex flexDirection="column" justifyContent="center" alignItems="center" textAlign="center">
            <Box width={{ _: '100%', tablet: '75%' }}>
              <Img fluid={data.progressive_app !== null && data.progressive_app.childImageSharp.fluid} />
            </Box>
            <Box width={{ _: '100%', tablet: '25%' }}>
              <Text as="p" mb={[3]}>Cuervo Negro 2021 &copy;</Text>
              <Text as="p">La Paz, Baja California Sur</Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;

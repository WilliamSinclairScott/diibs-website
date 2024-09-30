import { Flex, Text, Heading, Container } from '@radix-ui/themes';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

const About = () => {
  return (
    <Container size="3" p="6">
      <Flex direction="column" gap="9" className="aboutBody">
        <Flex direction={{ initial: 'column', md: 'row' }} gap="6" align="center">
          <AspectRatio ratio={16 / 9} className="aboutImage" style={{ flexBasis: '50%', minWidth: 0 }}>
            <img
              src="https://http.cat/100"
              alt="First"
              style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: 'var(--radius-3)' }}
            />
          </AspectRatio>
          <Flex direction="column" gap="3" className="aboutText" style={{ flexBasis: '50%', minWidth: 0 }}>
            <Heading size="6">What/Why We Are Doing</Heading>
            <Text as="p" size="3">
              We partner directly with restaurants that people struggle to get
              reservations at and allow them to list the top reservations for
              auction. The result - a guaranteed minimum spend on that prime
              reservation. We are providing a service for those individuals who
              couldn't secure a reservation on the traditional platforms, and
              don't want to see their money go to waste on one of the other
              platforms.
            </Text>
          </Flex>
        </Flex>
        <Flex direction={{ initial: 'column', md: 'row-reverse' }} gap="6" align="center">
          <AspectRatio ratio={16 / 9} className="aboutImage" style={{ flexBasis: '50%', minWidth: 0 }}>
            <img
              src="https://http.cat/404"
              alt="Second"
              style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: 'var(--radius-3)' }}
            />
          </AspectRatio>
          <Flex direction="column" gap="3" className="aboutText" style={{ flexBasis: '50%', minWidth: 0 }}>
            <Heading size="6">Who We Are</Heading>
            <Text as="p" size="3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              ante magna. Morbi elementum pretium malesuada. In quis laoreet
              justo. Donec tortor libero, sodales vitae nulla ut, eleifend
              efficitur nisl. Suspendisse potenti. Praesent sed sem ac lacus
              dignissim interdum. Donec posuere dolor vitae diam interdum, quis
              cursus justo bibendum. Fusce nisi turpis, volutpat non enim nec,
              scelerisque mattis ligula. Aenean egestas lorem arcu, id ultricies
              ligula ultrices et. Cras elementum lacus bibendum libero semper
              hendrerit.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default About;

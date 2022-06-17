import { Heading, chakra, ChakraProps } from '@chakra-ui/react';

export const DefaultPhrase: React.FC<ChakraProps> = ({ ...restProps }) => (
  <Heading
    as="h2"
    fontSize={{ base: '1.5rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
    mt="1rem"
    textAlign="center"
    textStyle="h2"
    w="100%"
    {...restProps}
  >
    <chakra.span color="blue.500">queime</chakra.span> 3x mais{' '}
    <chakra.span color="blue.500">calorias que o normal</chakra.span>
  </Heading>
);

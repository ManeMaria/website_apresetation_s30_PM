import { Heading, chakra, HeadingProps } from '@chakra-ui/react';

export const ItTimeChange: React.FC<HeadingProps> = ({ ...restProps }) => {
  return (
    <Heading
      as="h2"
      textStyle="h2"
      fontSize={{ base: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
      mt="1rem"
      w="100%"
      mb="2rem"
      textAlign="center"
      {...restProps}
    >
      chegou
      <chakra.span color="blue.500" fontWeight={700}>
        {' '}
        a hora <br />
        de{' '}
      </chakra.span>
      mudar
    </Heading>
  );
};

import { ButtonDefault } from '@/components';
import { Heading, chakra, Box, Flex, useMediaQuery } from '@chakra-ui/react';
import { Span } from '../Span';

import { LogoIcon } from '@/assets/icons/LogoIcon';
export const Banner: React.FC = () => {
  return (
    <chakra.section
      className="animate__animated animate__fadeIn animate__delay 2s"
      sx={{
        minH: { base: '80vh', md: '50vh', lg: '100vh', xl: '100vh' },
        w: { base: '100%' },
        pos: 'relative',
        mb: { base: '0' },
      }}
    >
      <Box
        bg={{ base: 'black.900', lg: '0', xl: '0' }}
        w={{ base: '100vw', lg: '45vw', xl: '45vw' }}
        h={{ base: '30rem', lg: 'auto', xl: 'auto' }}
        maxW="50rem"
        pos={{ base: 'absolute', lg: 'absolute', xl: 'absolute' }}
        inset={{ base: '10vh auto', lg: '5rem 0 auto 15rem', xl: '5rem 0 auto 15rem' }}
        px={{
          lg: '0',
          xl: '0',
          base: '1rem',
        }}
        pt={{ base: '0', lg: '0', xl: '0' }}
        boxShadow={{ base: '0px -20px 60px 50px #000', lg: 'none', xl: 'none' }}
      >
        <Box
          pos={{ base: 'static', lg: 'static', xl: 'static' }}
          top={{ base: '-5rem' }}
          px={{
            lg: '0',
            xl: '0',
            base: '1rem',
          }}
        >
          <Flex w="100%" justifyContent="center">
            <LogoIcon
              h={{ base: '8rem', lg: '10rem', xl: '10rem' }}
              w={{
                lg: '20rem',
                xl: '20rem',
                base: '15rem',
              }}
              alignSelf="start"
            />
          </Flex>
          <Heading as="h3" fontSize="1.4rem" mt="1rem" textAlign="left" lineHeight="170%">
            A maneira mais rápida de <Span>eliminar a pochete e a retenção</Span> em tempo recorde.
            <br /> Treine <Span>12 minutos </Span>por dia e tenha resultados em 4 semanas ou menos.
          </Heading>
          <ButtonDefault mt="2rem" />
        </Box>
      </Box>
    </chakra.section>
  );
};

import { ButtonDefault } from '@/components';
import { Heading, chakra, Box, Flex, useMediaQuery } from '@chakra-ui/react';
import { Span } from '../Span';

import { LogoIcon } from '@/assets/icons/LogoIcon';
import { bgSec1 } from '../../assets';
export const Banner: React.FC = () => {
  const [lessThan640] = useMediaQuery('(max-height: 640px)');

  return (
    <chakra.section
      className="animate__animated animate__fadeIn animate__delay 2s"
      sx={{
        minH: { base: '80vh', md: '50vh', lg: '100vh', xl: '100vh' },
        w: { base: '100%' },
        bg: {
          base: `url(${bgSec1.src}) no-repeat`,
        },
        bgPosition: { base: 'left center' },
        bgSize: { base: 'cover' },
        mb: { base: lessThan640 ? '25rem' : '15rem', lg: '0', xl: '0' },
      }}
    >
      <Box
        bg={{ base: '0', lg: '0', xl: '0' }}
        w={{ base: '100vw', lg: '60vw', xl: '60vw' }}
        h={{ base: 'auto', lg: 'auto', xl: 'auto' }}
        maxW="50rem"
        pos={{ base: 'absolute' }}
        inset={{ base: '-5rem 50%', lg: '5rem 50%', xl: '5rem 50%' }}
        transform="translateX(-50%)"
        px={{
          lg: '0',
          xl: '0',
          base: '1rem',
        }}

        // boxShadow={{ base: '0px -20px 60px 50px #000', lg: 'none', xl: 'none' }}
      >
        <Box
          pos={{ base: 'absolute', lg: 'static', xl: 'static' }}
          top={{ base: '25rem' }}
          px={{
            lg: 'auto',
            xl: 'auto',
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

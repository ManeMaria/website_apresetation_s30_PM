import { ButtonDefault } from '@/components';
import { Heading, chakra, Box, Flex, useMediaQuery } from '@chakra-ui/react';
import { Span } from '../Span';
import bgSec1 from '@/assets/images/bg-sec-1.png';
import { LogoIcon } from '@/assets/icons/LogoIcon';
export const Banner: React.FC = () => {
  const [greateThan900, lessThan600] = useMediaQuery([
    '(min-height: 900px)',
    '(max-height: 600px)',
  ]);

  return (
    <chakra.section
      className="animate__animated animate__fadeIn animate__delay 2s"
      sx={{
        minH: { base: '100vh', md: '50vh', lg: '100vh', xl: '100vh' },

        w: { base: '100%' },

        bg: {
          base: `url(${bgSec1.src}) no-repeat`,
        },
        bgPosition: { base: 'top right 15%', lg: 'center', xl: 'center' },
        bgSize: { base: 'auto 55%', lg: 'cover', xl: 'cover' },
        pos: 'relative',
        mb: { base: greateThan900 ? '0' : lessThan600 ? '15rem' : '7rem', lg: '0', xl: '0' },
      }}
    >
      <Box
        bg={{ base: 'black.900', lg: '0', xl: '0' }}
        w={{ base: '100vw', lg: '45vw', xl: '45vw' }}
        h={{ base: '30rem', lg: 'auto', xl: 'auto' }}
        maxW="50rem"
        pos={{ base: 'absolute', lg: 'absolute', xl: 'absolute' }}
        inset={{ base: '50vh auto', lg: '5rem 0 auto 15rem', xl: '5rem 0 auto 15rem' }}
        px={{
          lg: '0',
          xl: '0',
          base: '1rem',
        }}
        pt={{ base: '0', lg: '0', xl: '0' }}
        boxShadow={{ base: '0px -20px 60px 50px #000', lg: 'none', xl: 'none' }}
      >
        <Box
          pos={{ base: 'absolute', lg: 'static', xl: 'static' }}
          top={{ base: '-5rem' }}
          px={{
            lg: '0',
            xl: '0',
            base: '1rem',
          }}
        >
          <Flex w="100%" justifyContent="flex-start">
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
          <Heading as="h3" fontSize="1.4rem" mt="1rem" textAlign="left">
            Tenha menos{' '}
            <Span>inchaço abdominal, elimine a retenção e reduza quilos na balança</Span> em apenas
            4 semanas com a ajuda do protocolo <Span>S30</Span>. <br />
            São necessários 12 minutos por dia pra você ficar mais <Span>atraente</Span> e com maior{' '}
            <Span>autoestima</Span> em tempo recorde
          </Heading>
          <ButtonDefault mt="2rem" />
        </Box>
      </Box>
    </chakra.section>
  );
};

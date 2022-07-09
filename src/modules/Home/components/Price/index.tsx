import { ButtonDefault } from '@/components';
import Section from '@/components/common/Section';
import { Grid, Text, Box, Flex, useMediaQuery } from '@chakra-ui/react';
import { leo04, leo05 } from '../../assets';
import CountDown from '../CountDown';
import { ItTimeChange } from '../ItTimeChange';

export const Price: React.FC = () => {
  const [greateThan700, lessThan600] = useMediaQuery([
    '(max-height: 700px)',
    '(max-height: 600px)',
  ]);

  return (
    <Section
      sx={{
        h: { base: lessThan600 ? '130vh' : '100vh', lg: '120vh', xl: '120vh' },
        maxH: '100rem',
        w: { base: '100%' },
        bg: {
          base: `url(${leo05.src}) no-repeat`,
          lg: `url(${leo04.src}) no-repeat`,
          xl: `url(${leo04.src}) no-repeat`,
        },
        bgPosition: { base: 'center', lg: 'bottom left', xl: 'bottom left' },
        bgSize: { base: '100%', lg: '65%', xl: '60%' },
        pos: 'relative',
        boxShadow: 'inset 0 0 50px 50px #000',
        mb: { base: greateThan700 ? '15rem' : '10rem', lg: '0', xl: '0' },
      }}
    >
      <ItTimeChange data-aos="fade-in" display={{ base: 'block', lg: 'none', xl: 'none' }} />
      <Grid
        m={{ base: '35rem 0 0 0', lg: '5% 0 0 25%', xl: '5% 0 0 25%', '2xl': '25% 0 0 25%' }}
        pos="static"
        inset={{ base: 'auto', lg: '10% 27% auto auto', xl: '10% % auto auto' }}
        w={{ base: 'calc(100% - 2rem)', lg: '12rem', xl: '12rem' }}
      >
        <ItTimeChange display={{ base: 'none', lg: 'block', xl: 'block' }} />
        <Box
          border={{ base: 'none', lg: 'solid 5px', xl: 'solid 5px' }}
          borderColor="white"
          fontWeight={700}
          minH={{ base: '15rem', lg: '18rem', xl: '18rem' }}
          textStyle="h2"
          pos="relative"
        >
          <Flex
            justifyContent="center"
            minH="100%"
            w={{ base: 'auto', lg: '25rem', xl: '25rem' }}
            flexDir="column"
            bg="borwn"
            fontSize={{ base: '2rem' }}
          >
            <Box h="100%">
              <Box pos="absolute" w="100%" top={{ base: '10%', lg: '15%', xl: '15%' }}>
                <Box px="1rem" w="80%" pos="relative" mx="auto" mr="5%">
                  <Text
                    textAlign="center"
                    fontWeight={700}
                    textTransform="none"
                    fontSize={{ base: '2rem', lg: '2.5rem', xl: '2.5rem' }}
                  >
                    De 447,90
                  </Text>
                  <Box
                    h="3px"
                    bg="blue.500"
                    w={{ base: '70%', lg: '50%', xl: '50%' }}
                    pos="absolute"
                    top="50%"
                    left={{ base: '15%', lg: '25%', xl: '25%' }}
                    transform="skewY(-2deg)"
                  />
                </Box>
              </Box>
            </Box>

            <Flex>
              <Box w="80%" minH="100%" pos="relative">
                <Box pos="absolute" bottom={{ base: '25%', lg: '15%', xl: '15%' }} right="0">
                  r$
                </Box>
              </Box>
              <Box
                fontSize={{ base: '10rem' }}
                color="blue.500"
                minH="100%"
                lineHeight="initial"
                h={{ lg: '13rem', xl: '13rem' }}
              >
                <Box> 47</Box>
              </Box>
              <Box pos="relative" w="100%" minH="100%">
                <Box top={{ base: '20%', lg: '25%', xl: '25%' }} left="0.5rem" pos="absolute">
                  ,90
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Box display={{ base: 'none', lg: 'block', xl: 'block' }} my="2rem">
          <ButtonDefault />
          <Box mt="2rem">
            <CountDown />
          </Box>
        </Box>
      </Grid>
    </Section>
  );
};

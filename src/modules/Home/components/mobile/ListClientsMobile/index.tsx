import Section from '@/components/common/Section';
import { Grid, Text, Heading, Box, Circle } from '@chakra-ui/react';
import Image from 'next/image';

import { Span } from '../../Span';

import {
  client01,
  client02,
  client03,
  client04,
  client05,
  client06,
  client07,
  client08,
  client09,
  client10,
  leo03,
} from '../../../assets';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { ButtonDefault } from '@/components';
const clientsIimages = [
  client01,
  client02,
  client03,
  client04,
  client05,
  client06,
  client07,
  client08,
  client09,
  client10,
  leo03,
];
export const ListClientsMobile: React.FC = () => (
  <>
    <Grid overflow="auto" w="100%">
      <Grid
        display={{ base: 'grid', lg: 'none', xl: 'none' }}
        templateColumns={{
          base: 'repeat(11, 100%)',
          md: 'repeat(11, 25rem)',
          lg: 'repeat(11, 25rem)',
          xl: 'repeat(11, 25rem)',
        }}
        columnGap="2rem"
      >
        {clientsIimages.map((client, i) => (
          <>
            <Image src={client} key={client.src} alt={`client ${i}`} />
          </>
        ))}
      </Grid>
    </Grid>
    <Grid justifySelf="center" my="2rem" display={{ base: 'grid', lg: 'none', xl: 'none' }}>
      <Circle size="40px" bg="blue.500">
        <ArrowForwardIcon boxSize="25px" color="black" />
      </Circle>
    </Grid>
    <Grid
      maxW="48rem"
      mx="auto"
      placeItems="center"
      my="1rem"
      textAlign="center"
      data-aos="fade-in"
    >
      <Grid rowGap="1rem" px="2rem" fontSize="1.2rem" lineHeight="170%">
        <Text>
          <Span>Você não precisa </Span>
          <br />
          treinar 1 hora por dia para emagrecer.
        </Text>
        <Text>
          <Span>Você não precisa </Span>
          <br />
          se deslocar para a academia.
        </Text>
        <Text>
          <Span>Você não precisa </Span>
          <br /> fazer muito aeróbico (corrida, caminhada)
        </Text>
        <Text>
          <Span>Você não precisa </Span>
          <br />
          de exercícios mirabolantes.
        </Text>
      </Grid>

      <Box maxW="40rem" w="100%">
        <ButtonDefault mt="2rem" />
      </Box>
    </Grid>
  </>
);

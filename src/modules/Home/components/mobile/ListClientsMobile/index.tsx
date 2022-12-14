import { Grid, Text, Box, Circle, Button, Flex } from '@chakra-ui/react';
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
import { useState } from 'react';

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

const styleButton = {
  bg: 'none',
  _active: {},
  _hover: {},
  w: '26px',
  _focus: {},
};
const styleArrowForwardIcon = {
  boxSize: '25px',
  color: 'black',
};

const largeWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

export const ListClientsMobile: React.FC = () => {
  const [pos, setPos] = useState(0);

  const widthTotal = largeWidth * (clientsIimages.length - 1);

  return (
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
          transform={`translateX(${pos}px)`}
          columnGap="2rem"
          transition="all 0.3s"
        >
          {clientsIimages.map((client, i) => (
            <img src={client.src} key={`client_${i}_img`} alt={`client ${i}`} />
          ))}
        </Grid>
      </Grid>
      <Flex
        justifySelf="center"
        my="2rem"
        gap="2rem"
        display={{ base: 'Flex', lg: 'none', xl: 'none' }}
      >
        <Button
          {...styleButton}
          disabled={pos === 0}
          onClick={() => {
            setPos((pos) => pos + largeWidth);
          }}
        >
          <Circle size="40px" bg="blue.500" transform="rotate(-180deg)">
            <ArrowForwardIcon {...styleArrowForwardIcon} />
          </Circle>
        </Button>
        <Button
          {...styleButton}
          disabled={widthTotal + pos === 0}
          onClick={() => {
            setPos((pos) => pos - largeWidth);
          }}
        >
          <Circle size="40px" bg="blue.500">
            <ArrowForwardIcon {...styleArrowForwardIcon} />
          </Circle>
        </Button>
      </Flex>
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
            <Span>Voc?? n??o precisa </Span>
            <br />
            treinar 1 hora por dia para emagrecer.
          </Text>
          <Text>
            <Span>Voc?? n??o precisa </Span>
            <br />
            se deslocar para a academia.
          </Text>
          <Text>
            <Span>Voc?? n??o precisa </Span>
            <br /> fazer muito aer??bico (corrida, caminhada)
          </Text>
          <Text>
            <Span>Voc?? n??o precisa </Span>
            <br />
            de exerc??cios mirabolantes.
          </Text>
        </Grid>

        <Box maxW="40rem" w="100%">
          <ButtonDefault mt="2rem" />
        </Box>
      </Grid>
    </>
  );
};

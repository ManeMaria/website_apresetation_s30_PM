import { ButtonDefault } from '@/components';
import Section from '@/components/common/Section';
import {
  Grid,
  Text,
  Heading,
  chakra,
  Box,
  Flex,
  ListItem,
  GridItem,
  List,
  Circle,
} from '@chakra-ui/react';
import Image from 'next/image';
import { bgSec3, client04, client05 } from '../../assets';
import { DefaultPhrase } from '../DefaultPhrase';

export const Description: React.FC = () => {
  return (
    <Section
      sx={{
        display: { base: 'none', lg: 'block', xl: 'block' },
        w: { base: '100%' },
        bg: {
          base: 'none',
          lg: `url(${bgSec3.src}) no-repeat`,
          xl: `url(${bgSec3.src}) no-repeat`,
          '2xl': `url(${bgSec3.src}) no-repeat`,
        },
        bgPosition: { base: 'none', xl: 'center' },
        bgSize: { base: 'none', xl: 'cover' },
      }}
    >
      <Grid
        templateColumns={{
          base: '1fr',
          lg: 'repeat(2, 1fr)',
          xl: 'repeat(2, 1fr)',
        }}
        gap="2rem"
      >
        <Grid placeItems="center">
          <GridItem>
            <DefaultPhrase textAlign="left" />
            <Text fontSize="1.4rem" alignSelf="start" my="2rem">
              <chakra.span color="blue.500" fontWeight={500}>
                o s30 é o protocolo
              </chakra.span>{' '}
              com treinos intensos com duração de no máximo 12 minutos, que farão com que seu
              metabolismo queime calorias que 3x mais que o normal, de segunda a sábado casa treino
              é diferente, priorizando a quebra de adaptação, fazendo com que seu corpo não se
              adapte ao estímulo e mantenha sempre a frequência cardíaca elevada, fazendo, então,
              queimar mais calorias em pouco tempo
            </Text>

            <Box maxW={{ base: '100%', lg: '80%', xl: '80%' }}>
              <ButtonDefault />
            </Box>
          </GridItem>
        </Grid>
        <Grid gap="2rem" pl={{ base: 0, lg: '4rem', xl: '4rem' }}>
          <Image src={client04} alt="clientes 4" />
          <Image src={client05} alt="clientes 5" />
        </Grid>
      </Grid>
    </Section>
  );
};

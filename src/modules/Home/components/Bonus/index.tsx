import { ButtonDefault } from '@/components';
import Section from '@/components/common/Section';
import { Grid, Text, Heading, chakra, Box, ListItem, List } from '@chakra-ui/react';
import Image from 'next/image';
import { fullImg } from '../../assets';

export const Bonus: React.FC = () => {
  return (
    <Section my="4rem" display={{ base: 'none', lg: 'block', xl: 'block' }}>
      <Grid
        templateColumns={{
          base: 'repeat(2, 1fr)',
        }}
        gap="2rem"
      >
        <Grid fontSize="1.4rem" gap={{ base: '0', lg: '1rem', xl: '1rem' }}>
          <Heading
            as="h2"
            fontSize={{ base: '2.5rem', lg: '3rem', xl: '3rem' }}
            mt="1rem"
            textAlign="center"
            textStyle="h2"
            w="100%"
            lineHeight="80%"
          >
            <chakra.span color="blue.500" fontWeight={700}>
              bônus:
            </chakra.span>
            <br />
            <chakra.span fontSize="1.2rem" lineHeight="80%">
              além do protocolo s30,
              <br />
              você irá levar:
            </chakra.span>
          </Heading>
          <List spacing="0.5rem" my="1rem">
            <ListItem>- protocolo big coxas</ListItem>
            <ListItem>- protocolo abdominal de titanium</ListItem>
            <ListItem>- protocolo bumbum up</ListItem>
            <ListItem>- protocolo alimentar transformação em 8 semanas</ListItem>
          </List>
          <Text>
            acreditar é essencial,{' '}
            <chakra.span color="blue.500" fontWeight={500}>
              mas ter a atitude faz todal diferença
            </chakra.span>{' '}
            <br />
            <br />
            <chakra.span textTransform="initial">
              {' '}
              Tenha atitudes de mudança e tenha{' '}
              <chakra.span color="blue.500" fontWeight={500} textStyle="h2">
                resultados de verdade
              </chakra.span>
            </chakra.span>
          </Text>
          <Box maxW="40rem" w={{ base: '100%', lg: '80%', xl: '80%' }} justifySelf="center">
            <ButtonDefault />
          </Box>
        </Grid>
        <Box w={{ base: 'auto', lg: '90%', xl: '90%' }} justifySelf="end" alignSelf="end">
          {' '}
          <Image src={fullImg} alt="vários clientes" />
        </Box>
      </Grid>
    </Section>
  );
};

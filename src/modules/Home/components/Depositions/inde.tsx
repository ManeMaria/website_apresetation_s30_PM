import { ButtonDefault } from '@/components';
import Section from '@/components/common/Section';
import { Grid, Text, chakra, Box, GridItem } from '@chakra-ui/react';
import Image from 'next/image';
import { dep1, dep2, dep3, dep4 } from '../../assets';

export const Depositions: React.FC = () => {
  return (
    <Section my="3rem" display={{ base: 'none', lg: 'block', xl: 'block' }}>
      <Grid
        maxH={{ base: '40vh', lg: 'none', xl: 'none' }}
        overflowY="auto"
        templateColumns={{
          base: '1fr',
          lg: 'repeat(2, 1fr)',
          xl: 'repeat(2, 1fr)',
        }}
        placeItems="center"
      >
        <GridItem>
          <Image src={dep1} alt="dempoimento 1" />
        </GridItem>
        <GridItem>
          <Image src={dep2} alt="dempoimento 2" />
        </GridItem>
        <GridItem placeItems="end">
          <Image src={dep3} alt="dempoimento 3" />
        </GridItem>
        <GridItem>
          <Image src={dep4} alt="dempoimento 4" />
        </GridItem>
      </Grid>

      <Box mt="2rem">
        <Grid maxW="55rem" mx="auto" placeItems="center" rowGap="1rem">
          <Text fontSize="1.4rem" textAlign="center">
            o s30 é para você{' '}
            <chakra.span color="blue.500" fontWeight={500}>
              que se sente mal ao se olhar no espelho, para você que quer ter um bom caimento das
              roupas, que não ficar puxando a camisa para ajeitar, serve para vpcê que tá com a
              barriga inchada e tem vergonha de ir à praia.
            </chakra.span>{' '}
            chegou a sua hora de transformar sua realidade, vem pro time de resultados
          </Text>
          <Box maxW="40rem" w="100%">
            <ButtonDefault />
          </Box>
        </Grid>
      </Box>
    </Section>
  );
};

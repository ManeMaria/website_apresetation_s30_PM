import React from 'react';
import { Grid, Text, Heading, chakra, Box, ListItem, List } from '@chakra-ui/react';
import { bgSec2, leo03 } from '../../assets';
import Section from '@/components/common/Section';
import Image from 'next/image';
import { ButtonDefault } from '@/components';

import { FourBonus } from '../mobile/FourBonus';

export const MyHistory: React.FC = () => {
  return (
    <Section
      sx={{
        w: { base: '100%' },
        bg: {
          base: `url(${bgSec2.src}) no-repeat`,
        },
        bgPosition: { base: '70% 50%' },
        bgSize: { base: '500%', lg: 'contain', xl: 'contain' },
        mt: '2rem',
        minH: '100vh',
      }}
    >
      <Grid
        display={{ base: 'none', lg: 'grid', xl: 'grid' }}
        templateColumns={{ lg: '1fr 1fr', xl: '1fr 1fr' }}
        w="100%"
        h="100%"
        columnGap="3rem"
      >
        <Grid gap="1rem">
          <Heading
            as="h2"
            fontSize={{ base: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
            textTransform="capitalize"
            textAlign="left"
          >
            sua história
            <br />
            <chakra.span
              textTransform="none"
              fontSize={{ base: '1.4rem', lg: '1.6rem', xl: '1.6rem', '2xl': '1.6rem' }}
            >
              Minha história
            </chakra.span>
          </Heading>

          <Box fontSize="1.4rem">
            <Text>
              {' '}
              <chakra.span color="blue.500" fontWeight={500}>
                em 5 anos eu treinei várias pessoas e transformei a vida de muitos alinos através do
                exercício físico
              </chakra.span>
              , porém eu era personal e tinha uma angústia de ajudar mais pessoas através do meu
              método de treinamento, muitas pessoas vinham falar comigo nas redes sociais e elas
              tinham vários questionamentos em comum...
            </Text>
          </Box>
          <Box maxW="30rem" justifySelf={{ md: 'center' }}>
            <Image src={leo03} alt="o criador do projeto" />
          </Box>
        </Grid>
        <Grid h="100%">
          <List mt={{ base: '0', lg: '8.5rem', xl: '8.5rem' }} fontSize="1.4rem" spacing="2rem">
            <ListItem>
              - queria treinar com você, porém não tenho tempo, minha vida é corrida
            </ListItem>
            <ListItem>
              - poxa que massa léo, o ruim que tô muito apertada esse mês, muita coisa para pagar
            </ListItem>
            <ListItem>
              - muito massa seu treino, mas só farei se for na minha casa, odeio ir na academia
            </ListItem>
            <ListItem>
              - quero treinar rápido intenso, gosto de treinos assim: pra secar rápdio
            </ListItem>
          </List>
          <Box fontSize="1.4rem">
            <Text>
              <chakra.span color="blue.500" fontWeight={500}>
                Pensando nisso eu criei o método{' '}
              </chakra.span>
              s30 (seque em 30 dias),
              <chakra.span color="blue.500" fontWeight={500}>
                que está ajudando muita gente que não tem tempo, que pouca grana, que odeia academia
                e quer resultados rápidos com treinos curtos e intensos em casa.
              </chakra.span>
            </Text>
          </Box>
          <Box w={{ base: '100%', lg: '90%', xl: '90%' }}>
            <ButtonDefault />
          </Box>
        </Grid>
      </Grid>
      <FourBonus />
    </Section>
  );
};

import React from 'react';
import { Grid, Heading, Box, Flex, ListItem, List, GridItem } from '@chakra-ui/react';

import { ButtonDefault } from '@/components';
import { GiftIcon } from '@/assets/icons/GiftIcon';

export const FourBonus: React.FC = () => {
  return (
    <>
      <Grid
        display={{ base: 'grid', lg: 'none', xl: 'none' }}
        textStyle="h2"
        fontSize="1.2rem"
        alignItems="center"
        rowGap="2rem"
        mb="2rem"
      >
        <Heading
          as="h2"
          textAlign="center"
          color="blue.500"
          fontSize="1.7rem"
          data-aos="fade-in"
          data-aos-delay="500"
        >
          +4 bônus exclusivosa para você extras
        </Heading>

        <List textStyle="h2" fontWeight="700" spacing="2rem">
          <ListItem data-aos="fade-in" data-aos-delay="500">
            <Flex gap="1rem">
              <GiftIcon />
              1:protocolo big coxas completo 80,00 bônus
            </Flex>
          </ListItem>
          <ListItem data-aos="fade-in" data-aos-delay="500">
            <Flex gap="1rem">
              <GiftIcon />
              2:protocolo abdômen de titannium 50,00 bônus
            </Flex>
          </ListItem>
          <ListItem data-aos="fade-in" data-aos-delay="500">
            <Flex gap="1rem">
              <GiftIcon />
              3:protocolo bumbum up 80,00 bônus
            </Flex>
          </ListItem>
          <ListItem data-aos="fade-in" data-aos-delay="500">
            <Flex gap="1rem">
              <GiftIcon />
              4:ebook guia aliemntar resultados 8 semanas 19,90 bônus
            </Flex>
          </ListItem>
        </List>
        <Heading as="h2" textAlign="center" color="blue.500" fontSize="1.7rem">
          até aqui você economizou 229,90
        </Heading>
        <Heading as="h2" textAlign="center" fontSize="1.7rem">
          acreditar é essencial, mastera atitude faz toda diferença
        </Heading>
      </Grid>
      <GridItem
        placeItems="center"
        w={{ base: '100%' }}
        display={{ base: 'grid', lg: 'none', xl: 'none' }}
      >
        <ButtonDefault m="0" />
      </GridItem>
    </>
  );
};

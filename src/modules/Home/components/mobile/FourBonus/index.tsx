import React, { ReactNode } from 'react';
import { Grid, Heading, Flex, ListItem, List, GridItem, Text, Box } from '@chakra-ui/react';

import { ButtonDefault } from '@/components';
import { GiftIcon } from '@/assets/icons/GiftIcon';
const LineThrough: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Box textDecor="line-through" color="gray.400">
    r${children}
  </Box>
);
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
          +4 bônus exclusivos para você
        </Heading>

        <List textStyle="h2" fontWeight="700" spacing="2rem">
          <ListItem data-aos="fade-in" data-aos-delay="500">
            <Flex gap="1rem">
              <GiftIcon />
              <Text>
                1:protocolo big coxas completo
                <LineThrough>80,00</LineThrough>
              </Text>
            </Flex>
          </ListItem>
          <ListItem data-aos="fade-in" data-aos-delay="500">
            <Flex gap="1rem">
              <GiftIcon />
              <Text>
                2:protocolo abdômen de titannium <LineThrough>50,00</LineThrough>
              </Text>
            </Flex>
          </ListItem>
          <ListItem data-aos="fade-in" data-aos-delay="500">
            <Flex gap="1rem">
              <GiftIcon />
              <Text>
                3:protocolo bumbum up <LineThrough>80,00</LineThrough>
              </Text>
            </Flex>
          </ListItem>
          <ListItem data-aos="fade-in" data-aos-delay="500">
            <Flex gap="1rem">
              <GiftIcon />
              <Text>
                4:guia aliemntar, resultados 8 semanas <LineThrough>19,90</LineThrough>
              </Text>
            </Flex>
          </ListItem>
        </List>
        <Heading as="h2" textAlign="center" color="blue.500" fontSize="1.7rem">
          até aqui você economizou 229,90
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

import { ButtonDefault } from '@/components';
import { Grid, Heading, Box, Flex, ListItem, List } from '@chakra-ui/react';
import { IconListSection2 } from '../../IconListSection2';
import { Span } from '../../Span';

export const WhoIsTheProgram: React.FC = () => {
  return (
    <Grid display={{ base: 'grid', lg: 'none', xl: 'none' }} gap="2rem">
      <Box>
        {' '}
        <Heading textAlign="center">
          <Span>Para quem é o programa?</Span>
        </Heading>
      </Box>
      <List textStyle="h2" fontWeight="700" spacing="2rem">
        <ListItem>
          <Flex>
            <IconListSection2 />
            Pra quem tá cansado de perder roupas por conta do peso elevado
          </Flex>
        </ListItem>
        <ListItem>
          <Flex>
            <IconListSection2 />
            Pra você que quer eliminar a retenção e o inchaço na barriga
          </Flex>
        </ListItem>
        <ListItem>
          <Flex>
            <IconListSection2 />
            Pra quem já está com abuso de ouvir: “você engordou em?”
          </Flex>
        </ListItem>
        <ListItem>
          <Flex>
            <IconListSection2 />
            Pra quem quer sentar sem dobrar a barriga
          </Flex>
        </ListItem>
        <ListItem>
          <Flex>
            <IconListSection2 />
            Pra quem quer usar biquíni de lacinho
          </Flex>
        </ListItem>
        <ListItem>
          <Flex>
            <IconListSection2 />
            Pra quem quer usar sunga e ficar sem camisa na praia.
          </Flex>
        </ListItem>

        <ButtonDefault />
      </List>
    </Grid>
  );
};

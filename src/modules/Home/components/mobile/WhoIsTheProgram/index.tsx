import { ButtonDefault } from '@/components';
import { Grid, Text, Heading, Box, Flex, ListItem, List } from '@chakra-ui/react';
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
            para você que quer ter um bom caimento das roupas.
          </Flex>
        </ListItem>
        <ListItem>
          <Flex>
            <IconListSection2 />
            pra você que tá com a barriga inchada.
          </Flex>
        </ListItem>
        <ListItem>
          <Flex>
            <IconListSection2 />
            você que é falso magro(a) que tem pochete!
          </Flex>
        </ListItem>
        <Text pl="1.5rem">
          Para quem tá acima do peso. chegou a hora de transformar sua realidade em tempo record
        </Text>
        <ButtonDefault />
      </List>
    </Grid>
  );
};

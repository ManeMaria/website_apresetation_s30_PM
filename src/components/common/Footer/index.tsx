import { Text, chakra, Grid, Link } from '@chakra-ui/react';

export const Footer: React.FC = () => (
  <chakra.footer bg="blue.500" w="100%" h="5rem">
    <Grid w="100" h="100%" templateRows="1fr 0.5fr">
      <Text h="100%" alignContent="end" textAlign="center" py="0.5rem">
        Copyright © 2022 Nome da Empresa de Leo
      </Text>
      <Text bg="blue.300" w="100%" mt="auto" px="0.5rem" fontSize="0.8rem">
        {`made with </> &`} &#128151; by{' '}
        <Link href="https://github.com/ManeMaria" isExternal>
          cesar
        </Link>
      </Text>
    </Grid>
  </chakra.footer>
);

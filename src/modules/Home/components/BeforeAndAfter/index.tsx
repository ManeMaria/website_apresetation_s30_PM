import Section from '@/components/common/Section';
import { Grid, Text, Heading, Box, Circle } from '@chakra-ui/react';
import Image from 'next/image';

import { Span } from '../Span';

import { client01, client02, client03, bgSec3 } from '../../assets';
import { ListClientsMobile } from '../mobile/ListClientsMobile';
export const BeforeAndAfter: React.FC = () => {
  return (
    <Section
      sx={{
        w: { base: '100%' },
        bg: {
          base: 'none',
          lg: `url(${bgSec3.src}) no-repeat`,
          xl: `url(${bgSec3.src}) no-repeat`,
        },
        bgPosition: { base: 'center' },
        bgSize: { base: 'center', xl: 'cover' },
      }}
    >
      <Heading
        as="h2"
        fontSize={{ base: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
        my="3rem"
        textAlign="center"
        textStyle="h2"
        w="100%"
      >
        <Span>antes e depois</Span>
      </Heading>
      <Grid
        display={{ base: 'none', lg: 'grid', xl: 'grid' }}
        templateColumns={{
          base: 'repeat(3, 1fr)',
        }}
        columnGap="2rem"
      >
        <Image
          src={client01}
          alt="clientes 1"
          className="animate__animated animate__ animate__delay 1s"
          data-aos="slide-left"
        />
        <Image src={client02} alt="clientes 2" data-aos="slide-up" />
        <Image src={client03} alt="clientes 3" data-aos="slide-right" />
      </Grid>
      <ListClientsMobile />
    </Section>
  );
};

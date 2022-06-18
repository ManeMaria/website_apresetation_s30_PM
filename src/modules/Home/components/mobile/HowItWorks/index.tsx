import { Text, Heading, Box } from '@chakra-ui/react';

import bgSec2M from '@/assets/images/bg-sec-2-m.png';
import Section from '@/components/common/Section';
import { Span } from '../../Span';

export const HowItWorks: React.FC = () => {
  return (
    <Section
      sx={{
        my: '2rem',
        display: { base: 'block', lg: 'none', xl: 'none' },
        w: { base: '100%' },
        bg: `url(${bgSec2M.src}) no-repeat`,
        bgPosition: { base: 'center right' },
        bgSize: { base: '120%', lg: '100%', xl: '100%' },
      }}
    >
      <Heading as="h2" textAlign="center" w="100%" data-aos="fade-in">
        <Span>Como funciona o protocolo S30?</Span>
      </Heading>
      <Box p="1rem" data-aos="fade-in" data-aos-delay="500">
        <Text>
          O <Span textTransform="uppercase">s30</Span> prioriza a quebra de adaptação, fazendo com
          que seu metabolismo não se adapte aos estimulos mantendo a frequência cardiaca elevada, e
          então, <Span>queimar mais calorias em tempo recorde.</Span>
        </Text>
        <Text>
          O <Span textTransform="uppercase">s30</Span> é a combinação perfeita de treinos intensos,
          frquência ideal e ciência comprovada.
        </Text>
      </Box>
    </Section>
  );
};

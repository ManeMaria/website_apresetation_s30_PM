import { ButtonDefault } from '@/components';
import Section from '@/components/common/Section';
import { payments, stamp } from '@/modules/Home/assets';
import { Text, Heading, Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';

export const PaymentsMethods: React.FC = () => {
  return (
    <Section display={{ base: 'block', lg: 'none', xl: 'none' }} mb="2rem">
      <Flex flexWrap="wrap" justifyContent="center" gap="2rem">
        <ButtonDefault />
        <Image src={stamp} alt="selo" />
        <Box>
          <Heading as="h4" size="md" textAlign="center" mb="2rem" textStyle="h2">
            {' '}
            teste grátis por 7 dias
          </Heading>
          <Text textAlign="center" fontWeight="bold">
            Risco zero! Experimente, se não gostar, não paga. Nosso programa é completo, tenho
            certeza que você transformará sua vida para sempre. Venha bater um papo com a gente,
            vamos descobrir a melhor estratégia para você!
          </Text>
        </Box>

        <Image src={payments} alt="pagamentos" />
      </Flex>
    </Section>
  );
};

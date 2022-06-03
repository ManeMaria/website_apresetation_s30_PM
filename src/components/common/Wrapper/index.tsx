import { Container } from '@chakra-ui/react';
import { ReactNode } from 'react';

export type WrapperTypes = { children: ReactNode };

export const Wrapper: React.FC<WrapperTypes> = ({ children, ...restProps }) => (
  <Container maxW="90rem" centerContent {...restProps}>
    {children}
  </Container>
);

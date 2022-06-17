import { ChakraProps } from '@chakra-ui/react';
import { Wrapper } from '../Wrapper';
import { chakra } from '@chakra-ui/react';
import { ReactNode } from 'react';

const Section: React.FC<ChakraProps & { children: ReactNode }> = ({ children, ...anyProps }) => {
  return (
    <chakra.section {...anyProps}>
      <Wrapper>{children}</Wrapper>
    </chakra.section>
  );
};
export default Section;

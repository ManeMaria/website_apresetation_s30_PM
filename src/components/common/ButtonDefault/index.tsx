import { Button, ButtonGroupProps, ButtonProps, ChakraProps } from '@chakra-ui/react';
import React from 'react';

export function ButtonDefault({ children, ...props }: ButtonProps) {
  return (
    <Button
      textStyle="paragraph"
      color="black.900"
      colorScheme="green"
      boxShadow=" 0 0 20px 1px #58FF9B"
      w="100%"
      borderRadius={40}
      py="1.7rem"
      mt="2rem"
      {...props}
    >
      {children ?? 'transform sua vida agora'}
    </Button>
  );
}

import { Button, ButtonGroupProps, ButtonProps, ChakraProps } from '@chakra-ui/react';
import React from 'react';

export function ButtonDefault({ children, ...props }: ButtonProps) {
  return (
    <Button
      textStyle="h1"
      color="white"
      bg="yellow.500"
      w="100%"
      borderRadius={40}
      py="2rem"
      mt="2rem"
      fontSize="1.2rem"
      {...props}
    >
      {children ?? 'transform sua vida agora'}
    </Button>
  );
}

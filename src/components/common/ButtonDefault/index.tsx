import {
  Button,
  ButtonGroupProps,
  ButtonProps,
  ChakraProps,
} from "@chakra-ui/react";
import React from "react";

export function ButtonDefault({ children, ...props }: ButtonProps) {
  return (
    <Button
      as="a"
      href="https://pay.hotmart.com/C70709392A?off=8zt629zq"
      textStyle="h2"
      color="white"
      bg="yellow.500"
      w="100%"
      borderRadius={40}
      py="2rem"
      fontSize="1.2rem"
      boderColor="yellow.500"
      _hover={{
        bg: "yellow.500",
        boxShadow: "0 0 10px 1px #EDA91E",
      }}
      {...props}
    >
      {children ?? "quero ter resultados"}
    </Button>
  );
}

import { ChakraProps, ListIcon } from '@chakra-ui/react';
import { BurdenIcon } from '@/assets/icons/BurdenIcon';

export const IconListSection2: React.FC<ChakraProps> = ({ ...restProps }) => (
  <ListIcon as={BurdenIcon} boxSize="1.4rem" {...restProps} />
);

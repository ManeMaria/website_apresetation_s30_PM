import { Box, ChakraProps } from '@chakra-ui/react';

import Image, { ImageProps } from 'next/image';
import leo02 from '@/assets/images/leo02.png';

export const ImageNextLogoSecundary: React.FC<{
  chakraProps?: ChakraProps;
  imageProps?: ImageProps;
  scale: boolean;
}> = ({ chakraProps, imageProps, scale }) => (
  <Box {...chakraProps} maxW="30rem">
    <Image
      alt="logo sencundária"
      style={{ objectFit: 'contain', maxWidth: '100%', transform: scale ? 'scaleX(-1)' : 'none' }}
      src={leo02}
      {...imageProps}
    />
  </Box>
);

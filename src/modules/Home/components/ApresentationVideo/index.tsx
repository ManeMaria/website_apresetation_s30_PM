import Section from '@/components/common/Section';
import { chakra, Flex, useMediaQuery } from '@chakra-ui/react';
import { ImageNextLogoSecundary } from '../ImageNextLogoSecundary';
import { WhoIsTheProgram } from '../mobile/WhoIsTheProgram';

const Video: React.FC = () => {
  const [lessThan1080] = useMediaQuery('(max-width: 1080px)');
  return (
    <Flex
      w="100%"
      pos="relative"
      justifyContent="space-between"
      alignItems="center"
      flexDir={{ base: 'column', lg: 'row', xl: 'row' }}
      gap="1rem"
      data-aos="fade-in"
    >
      <ImageNextLogoSecundary scale={!lessThan1080} />
      <chakra.iframe
        left="50%"
        top="50%"
        transform={{
          base: 'none',
          lg: 'translate(-50%, -50%)',
          xl: 'translate(-50%, -50%)',
        }}
        pos={{ base: 'static', lg: 'absolute', xl: 'absolute' }}
        zIndex={2}
        width={{ base: '100%', lg: '45rem', xl: '40rem' }}
        height={{ base: '15rem', lg: '25rem', xl: '25rem' }}
        src="https://www.youtube.com/embed/aO4w_I1X45Y"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></chakra.iframe>
      <ImageNextLogoSecundary
        scale={false}
        chakraProps={{
          display: { base: 'none', lg: 'block', xl: 'block' },
        }}
      />
      <WhoIsTheProgram />
    </Flex>
  );
};

export const ApresentationVideo: React.FC = () => (
  <Section minH={{ base: 'auto' }}>
    <Video />
  </Section>
);

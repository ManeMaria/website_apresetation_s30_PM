import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../../styles/globalConfig';

import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="S-30"
        description="o protocolo que mudará sua vida"
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}`}
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
          site_name: 'S-30',
          title: 'S-30',
          description: 'o protocolo que mudará sua vida',

          images: [
            {
              url: `${process.env.NEXT_PUBLIC_BASE_URL}/leo02.png`,
              width: 800,
              height: 600,
              alt: 'leo, o criador',
              type: 'image/png',
            },
            {
              url: `${process.env.NEXT_PUBLIC_BASE_URL}/leo02.png`,
              width: 900,
              height: 800,
              alt: 'leo, o criador Second',
              type: 'image/png',
            },
            { url: `${process.env.NEXT_PUBLIC_BASE_URL}/leo02.png` },
            { url: `${process.env.NEXT_PUBLIC_BASE_URL}/leo02.png` },
          ],
        }}
      />

      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;

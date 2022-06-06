import {
  Grid,
  Text,
  Heading,
  chakra,
  Box,
  Flex,
  ChakraProps,
  ListItem,
  OrderedList,
  GridItem,
  List,
  Spacer,
  ListIcon,
} from '@chakra-ui/react';

import bgSec1 from '@/assets/images/bg-sec-1.png';
import bgSec2 from '@/assets/images/bg-sec-2.png';
import bgSec3 from '@/assets/images/bg-sec-3.png';
import { LogoIcon } from '@/assets/icons/LogoIcon';
import { ButtonDefault, Wrapper, Footer } from '@/components/';
import Image, { ImageProps } from 'next/image';
import leo02 from '@/assets/images/leo02.png';
import leo03 from '@/assets/images/leo03.png';
import leo04 from '@/assets/images/leo04.png';
import client01 from '@/assets/images/client_01.png';
import client02 from '@/assets/images/client_02.png';
import client03 from '@/assets/images/client_03.png';
import client04 from '@/assets/images/client_04.png';
import client05 from '@/assets/images/client_05.png';
import dep1 from '@/assets/images/dep_1.png';
import dep2 from '@/assets/images/dep_2.png';
import dep3 from '@/assets/images/dep_3.png';
import dep4 from '@/assets/images/dep_4.png';
import fullImg from '@/assets/images/full_imgs.png';
import payments from '@/assets/images/payments.png';
import stamp from '@/assets/images/stamp.png';
import { BurdenIcon } from '@/assets/icons/BurdenIcon';

const ImageNextLogoSecundary: React.FC<{
  chakraProps?: ChakraProps;
  imageProps?: ImageProps;
  scale: boolean;
}> = ({ chakraProps, imageProps, scale }) => (
  <Box {...chakraProps}>
    <Image
      alt="logo sencundária"
      {...imageProps}
      style={{ objectFit: 'contain', maxWidth: '100%', transform: scale ? 'scaleX(-1)' : 'none' }}
      src={leo02}
    />
  </Box>
);

const DefaultPhrase: React.FC<ChakraProps> = ({ ...restProps }) => (
  <Heading
    as="h2"
    fontSize={{ base: '1.5rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
    mt="1rem"
    textAlign="center"
    textStyle="h1"
    w="100%"
    {...restProps}
  >
    <chakra.span color="blue.500">queime</chakra.span> 3x mais{' '}
    <chakra.span color="blue.500">calorias que o normal</chakra.span>
  </Heading>
);

const IconListSection2: React.FC<ChakraProps> = ({ ...restProps }) => (
  <ListIcon as={BurdenIcon} boxSize="1.4rem" {...restProps} />
);

export const Home: React.FC = () => {
  return (
    <>
      <chakra.main>
        <chakra.section
          className="animate__animated animate__fadeIn animate__slower 1s"
          sx={{
            minH: { base: '100vh', md: '50vh', lg: '100vh', xl: '100vh' },

            w: { base: '100%' },

            bg: {
              base: `url(${bgSec1.src}) no-repeat`,
              lg: `url(${bgSec1.src}) no-repeat`,
              xl: `url(${bgSec1.src}) no-repeat`,
            },
            bgPosition: { base: 'top right 15%', lg: 'center', xl: 'center' },
            bgSize: { base: 'auto 55%', xl: 'cover' },
            pos: 'relative',
            mb: { base: '10rem', lg: '0', xl: '0' },
          }}
        >
          <Box
            bg={{ base: 'black.900', lg: '0', xl: '0' }}
            w={{ base: '100vw', lg: '45vw', xl: '45vw' }}
            h={{ base: '30rem', lg: 'auto', xl: 'auto' }}
            maxW="50rem"
            pos={{ base: 'absolute', lg: 'absolute', xl: 'absolute' }}
            inset={{ base: '50vh auto', lg: '5rem 0 auto 15rem', xl: '5rem 0 auto 15rem' }}
            className="animate__animated animate__fadeInLeft"
            px={{
              lg: '0',
              xl: '0',
              base: '1rem',
            }}
            pt={{ base: '0', lg: '0', xl: '0' }}
            boxShadow={{ base: '0px -20px 60px 50px #000', lg: 'none', xl: 'none' }}
          >
            <Box
              pos={{ base: 'absolute', lg: 'static', xl: 'static' }}
              top={{ base: '-5rem' }}
              px={{
                lg: '0',
                xl: '0',
                base: '1rem',
              }}
            >
              <Flex w="100%" justifyContent="flex-start">
                <LogoIcon
                  h={{ base: '8rem', lg: '10rem', xl: '10rem' }}
                  w={{
                    lg: '20rem',
                    xl: '20rem',
                    base: '15rem',
                  }}
                  alignSelf="start"
                />
              </Flex>
              <Heading as="h3" fontSize="1.4rem" mt="1rem" textAlign="left" textStyle="paragraph">
                Tenha menos inchaço abdominal, elimine a retenção e reduza quilos na balança em
                apenas 4 semanas com a ajuda do protocolo S30. São necessários 12 minutos por dia
                pra você ficar mais atraente e com maior autoestima em tempo recorde.
              </Heading>
              <ButtonDefault />
            </Box>
          </Box>
        </chakra.section>
        <chakra.section minH={{ base: 'auto', lg: 'auto', xl: 'auto' }}>
          <Wrapper>
            <DefaultPhrase />
            <Flex
              w="100%"
              pos="relative"
              justifyContent="space-between"
              alignItems="center"
              flexDir={{ base: 'column', lg: 'row', xl: 'row' }}
              gap="1rem"
            >
              <ImageNextLogoSecundary
                scale
                chakraProps={{
                  w: { base: '100%', lg: '30rem', xl: '30rem' },
                }}
              />
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
                height={{ base: '100%', lg: '25rem', xl: '25rem' }}
                src="https://www.youtube.com/embed/aO4w_I1X45Y"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></chakra.iframe>
              <ImageNextLogoSecundary
                scale={false}
                chakraProps={{
                  w: '30rem',
                  display: { base: 'none', lg: 'block', xl: 'block' },
                }}
              />
              <Grid display={{ base: 'grid', lg: 'none', xl: 'none' }} gap="2rem">
                <Box>
                  {' '}
                  <Heading textAlign="center">Para quem é o programa?</Heading>
                </Box>
                <List textStyle="h1" fontWeight="700" spacing="2rem">
                  <ListItem>
                    <Flex>
                      <IconListSection2 />
                      para você que quer ter um bom caimento das roupas
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex>
                      <IconListSection2 />
                      pra você que tá com a barriga inchada
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex>
                      <IconListSection2 /> pra quem tá acima do peso. chegou a hora de transformar
                      sua realidade em tempo recorde
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex>
                      <IconListSection2 />
                      você que é falso magro(a) que tem pochete!
                    </Flex>
                  </ListItem>
                  <ButtonDefault />
                </List>
              </Grid>
            </Flex>
          </Wrapper>
        </chakra.section>
        <chakra.section
          sx={{
            w: { base: '100%' },
            bg: {
              base: 'none',
              lg: `url(${bgSec3.src}) no-repeat`,
              xl: `url(${bgSec3.src}) no-repeat`,
            },
            bgPosition: { base: 'center' },
            bgSize: { base: 'center', xl: 'cover' },
          }}
        >
          <Wrapper>
            <Heading
              as="h2"
              fontSize={{ base: '1.5rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
              mt="1rem"
              textAlign="center"
              textStyle="h1"
              w="100%"
            >
              O resultado
            </Heading>
            <Grid
              templateColumns="repeat(5, 1fr)"
              gap="1rem"
              p="2rem"
              justifyContent="center"
              overflowX="scroll"
              w="100%"
            >
              <Image
                src={client01}
                alt="clientes 1"
                className="animate__animated animate__ animate__delay 1s"
              />

              <Image
                src={client02}
                alt="clientes 2"
                className="animate__animated animate__slideInUp animate__delay 1s"
              />
              <Image
                src={client03}
                alt="clientes 3"
                className="animate__animated animate__slideInRight animate__delay 1s"
              />
              <Image src={client04} alt="clientes 3" />
              <Image src={client05} alt="clientes 3" />
            </Grid>
            <Grid maxW="48rem" mx="auto" placeItems="center" my="1rem">
              <Text fontSize="1.4rem" textAlign="center" textStyle="h1">
                você não precisa treinar 1 hora por dia, não precisa ir para a academia, menos ainda
                fazer muito aeróbico (corrida, caminhas).
                <chakra.span color="blue.500" fontWeight={500}>
                  {' '}
                  o s30 te dará um direcinamento, um protocolo com treinos rápidos
                </chakra.span>
                , intensos voltados para o emafrecimento e definição em 4 semanas.
              </Text>
              <Box maxW="40rem" w="100%">
                <ButtonDefault />
              </Box>
            </Grid>
          </Wrapper>
        </chakra.section>
        <chakra.section
          sx={{
            minH: { base: '100vh' },
            w: { base: '100%' },
            bg: {
              base: `url(${bgSec2.src}) no-repeat`,
            },
            bgPosition: { base: '70% 50%' },
            bgSize: { base: 'cover' },
          }}
          mt="2rem"
        >
          <Wrapper>
            <Grid
              display={{ base: 'none', lg: 'block', xl: 'block' }}
              templateColumns={{ base: '1fr', lg: '1fr 1fr', xl: '1fr 1fr' }}
              w="100%"
              gap="3rem"
            >
              <Grid gap="1rem">
                <Heading
                  as="h3"
                  fontSize={{ base: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
                  textTransform="capitalize"
                  textAlign="left"
                >
                  sua história
                  <br />
                  <chakra.span
                    textTransform="none"
                    fontSize={{ base: '1.4rem', lg: '2rem', xl: '2rem', '2xl': '2rem' }}
                  >
                    Minha história
                  </chakra.span>
                </Heading>

                <Box fontSize="1.4rem">
                  <Text>
                    {' '}
                    <chakra.span color="blue.500" fontWeight={500}>
                      em 5 anos eu treinei várias pessoas e transformei a vida de muitos alinos
                      através do exercício físico
                    </chakra.span>
                    , porém eu era personal e tinha uma angústia de ajudar mais pessoas através do
                    meu método de treinamento, muitas pessoas vinham falar comigo nas redes sociais
                    e elas tinham vários questionamentos em comum...
                  </Text>
                </Box>
                <Box maxW="30rem" justifySelf={{ md: 'center' }}>
                  <Image src={leo03} alt="o criador do projeto" />
                </Box>
              </Grid>
              <Grid h="100%">
                <List
                  fontSize="1.4rem"
                  mt={{ base: '0', lg: '8.5rem', xl: '8.5rem' }}
                  spacing="2rem"
                >
                  <ListItem>
                    - queria treinar com você, porém não tenho tempo, minha vida é corrida
                  </ListItem>
                  <ListItem>
                    - poxa que massa léo, o ruim que tô muito apertada esse mês, muita coisa para
                    pagar
                  </ListItem>
                  <ListItem>
                    - muito massa seu treino, mas só farei se for na minha casa, odeio ir na
                    academia
                  </ListItem>
                  <ListItem>
                    - quero treinar rápidoe intenso, gosto de treinos assim: pra secar rápdio
                  </ListItem>
                </List>
                <Box fontSize="1.4rem">
                  <Text>
                    <chakra.span color="blue.500" fontWeight={500}>
                      Pensando nisso eu criei o método{' '}
                    </chakra.span>
                    s30 (seque em 30 dias),
                    <chakra.span color="blue.500" fontWeight={500}>
                      que está ajudando muita gente que não tem tempo, que pouca grana, que odeia
                      academia e quer resultados rápidos com treinos curtos e intensos em casa.
                    </chakra.span>
                  </Text>
                </Box>
                <Box w={{ base: '100%', lg: '90%', xl: '90%' }}>
                  <ButtonDefault />
                </Box>
              </Grid>
            </Grid>
            <Flex
              h="100vh"
              alignItems="end"
              display={{ base: 'fex', lg: 'none', xl: 'none' }}
              textStyle="h1"
            >
              <Heading as="h2" textAlign="center" color="blue.500" fontSize="1.2rem">
                até aqui você economizou 229,90 acreditar é essencial, mas ter a atitude faz toda
                diferença
              </Heading>
            </Flex>
          </Wrapper>
        </chakra.section>
        <chakra.section my="3rem" display={{ base: 'none', lg: 'block', xl: 'block' }}>
          <Wrapper>
            <Grid
              maxH={{ base: '40vh', lg: 'none', xl: 'none' }}
              overflowY="auto"
              templateColumns={{
                base: '1fr',
                lg: 'repeat(2, 1fr)',
                xl: 'repeat(2, 1fr)',
              }}
              placeItems="center"
            >
              <GridItem>
                <Image src={dep1} alt="dempoimento 1" />
              </GridItem>
              <GridItem>
                <Image src={dep2} alt="dempoimento 2" />
              </GridItem>
              <GridItem placeItems="end">
                <Image src={dep3} alt="dempoimento 3" />
              </GridItem>
              <GridItem>
                <Image src={dep4} alt="dempoimento 4" />
              </GridItem>
            </Grid>

            <Box mt="2rem">
              <Grid maxW="55rem" mx="auto" placeItems="center" rowGap="1rem">
                <Text fontSize="1.4rem" textAlign="center">
                  o s30 é para você{' '}
                  <chakra.span color="blue.500" fontWeight={500}>
                    que se sente mal ao se olhar no espelho, para você que quer ter um bom caimento
                    das roupas, que não ficar puxando a camisa para ajeitar, serve para vpcê que tá
                    com a barriga inchada e tem vergonha de ir à praia.
                  </chakra.span>{' '}
                  chegou a sua hora de transformar sua realidade, vem pro time de resultados
                </Text>
                <Box maxW="40rem" w="100%">
                  <ButtonDefault />
                </Box>
              </Grid>
            </Box>
          </Wrapper>
        </chakra.section>
        <chakra.section
          sx={{
            display: { base: 'none', lg: 'block', xl: 'block' },
            w: { base: '100%' },
            bg: {
              base: 'none',
              lg: `url(${bgSec3.src}) no-repeat`,
              xl: `url(${bgSec3.src}) no-repeat`,
              '2xl': `url(${bgSec3.src}) no-repeat`,
            },
            bgPosition: { base: 'none', xl: 'center' },
            bgSize: { base: 'none', xl: 'cover' },
            bgAttachment: { base: 'none', xl: 'fixed' },
          }}
        >
          <Wrapper>
            <Grid
              templateColumns={{
                base: '1fr',
                lg: 'repeat(2, 1fr)',
                xl: 'repeat(2, 1fr)',
              }}
              gap="2rem"
            >
              <Grid placeItems="center">
                <GridItem>
                  <DefaultPhrase textAlign="left" />
                  <Text fontSize="1.4rem" alignSelf="start" my="2rem">
                    <chakra.span color="blue.500" fontWeight={500}>
                      o s30 é o protocolo
                    </chakra.span>{' '}
                    com treinos intensos com duração de no máximo 12 minutos, que farão com que seu
                    metabolismo queime calorias que 3x mais que o normal, de segunda a sábado casa
                    treino é diferente, priorizando a quebra de adaptação, fazendo com que seu corpo
                    não se adapte ao estímulo e mantenha sempre a frequência cardíaca elevada,
                    fazendo, então, queimar mais calorias em pouco tempo
                  </Text>

                  <Box maxW={{ base: '100%', lg: '80%', xl: '80%' }}>
                    <ButtonDefault />
                  </Box>
                </GridItem>
              </Grid>
              <Grid gap="2rem" pl={{ base: 0, lg: '4rem', xl: '4rem' }}>
                <Image src={client04} alt="clientes 3" />
                <Image src={client05} alt="clientes 3" />
              </Grid>
            </Grid>
          </Wrapper>
        </chakra.section>
        <chakra.section my="2rem" display={{ base: 'none', lg: 'block', xl: 'block' }}>
          <Wrapper>
            <Grid
              templateColumns={{
                base: '1fr',
                lg: 'repeat(2, 1fr)',
                xl: 'repeat(2, 1fr)',
              }}
              gap="2rem"
            >
              <Grid fontSize="1.4rem" gap={{ base: '0', lg: '1rem', xl: '1rem' }}>
                <Heading
                  as="h2"
                  fontSize={{ base: '2.5rem', lg: '3rem', xl: '3rem' }}
                  mt="1rem"
                  textAlign="center"
                  textStyle="h1"
                  w="100%"
                  lineHeight="80%"
                >
                  <chakra.span color="blue.500" fontWeight={700}>
                    bônus:
                  </chakra.span>
                  <br />
                  <chakra.span fontSize="1.2rem" lineHeight="80%">
                    além do protocolo s30,
                    <br />
                    você irá levar:
                  </chakra.span>
                </Heading>
                <List spacing="0.5rem" my="1rem">
                  <ListItem>- protocolo big coxas</ListItem>
                  <ListItem>- protocolo abdominal de titanium</ListItem>
                  <ListItem>- protocolo bumbum up</ListItem>
                  <ListItem>- protocolo alimentar transformação em 8 semanas</ListItem>
                </List>
                <Text>
                  acreditar é essencial,{' '}
                  <chakra.span color="blue.500" fontWeight={500}>
                    mas ter a atitude faz todal diferença
                  </chakra.span>{' '}
                  <br />
                  <br />
                  <chakra.span textTransform="initial">
                    {' '}
                    Tenha atitudes de mudança e tenha{' '}
                    <chakra.span color="blue.500" fontWeight={500} textStyle="h1">
                      resultados de verdade
                    </chakra.span>
                  </chakra.span>
                </Text>
                <Box maxW="40rem" w={{ base: '100%', lg: '80%', xl: '80%' }} justifySelf="center">
                  <ButtonDefault />
                </Box>
              </Grid>
              <Box w={{ base: 'auto', lg: '90%', xl: '90%' }} justifySelf="end" alignSelf="end">
                {' '}
                <Image src={fullImg} alt="vários clientes" />
              </Box>
            </Grid>
          </Wrapper>
        </chakra.section>
        <chakra.section
          sx={{
            h: { base: '50vh', lg: '120vh', xl: '120vh' },
            maxH: '100rem',
            w: { base: '100%' },
            bg: `url(${leo04.src}) no-repeat`,
            bgPosition: { base: 'bottom center', lg: 'bottom left', xl: 'bottom left' },
            bgSize: { base: '100%', lg: '65%', xl: '65%' },
            pos: 'relative',
            boxShadow: 'inset 0 0 50px 50px #000',
          }}
        >
          <Wrapper>
            <Grid
              display={{ base: 'none', lg: 'grid', xl: 'grid' }}
              pos="absolute"
              inset={{ base: 'auto', lg: '10% 27% auto auto', xl: '10% % auto auto' }}
              w={{ base: 'calc(100% - 2rem)', lg: '12rem', xl: '12rem' }}
            >
              {' '}
              <Heading
                as="h2"
                fontSize={{ base: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
                mt="1rem"
                textStyle="h1"
                w="100%"
                mb="2rem"
              >
                chegou
                <chakra.span color="blue.500" fontWeight={700}>
                  {' '}
                  a hora <br />
                  de{' '}
                </chakra.span>
                mudar
              </Heading>
              <Box border="solid 5px" borderColor="white" fontWeight={700}>
                <Flex
                  justifyContent="center"
                  h="100%"
                  w={{ base: 'auto', lg: '25rem', xl: '25rem' }}
                  flexDir="column"
                  pos="relative"
                >
                  <Box
                    pos="absolute"
                    left={{ base: '20%', md: '30%', lg: '27%', xl: '27%' }}
                    top="10%"
                  >
                    <Box pos="relative" px="1rem" w="100%">
                      <Text fontWeight={700} fontSize="3rem" textTransform="none">
                        De 197,90
                      </Text>
                      <Box
                        h="3px"
                        bg="blue.500"
                        w="100%"
                        pos="absolute"
                        top="50%"
                        right="1%"
                        transform="skewY(-2deg)"
                      />
                    </Box>
                  </Box>

                  <Flex mt="3rem">
                    <Box fontSize="3rem" pos="relative" w="80%" h="100%">
                      <Box pos="absolute" bottom="20%" right="0">
                        r$
                      </Box>
                    </Box>
                    <Box fontSize="10rem" color="blue.500">
                      <Box> 47</Box>
                    </Box>
                    <Box fontSize="3rem" pos="relative" w="100%" h="100%">
                      <Box pos="absolute" top="15%">
                        ,90
                      </Box>
                    </Box>
                  </Flex>
                </Flex>
              </Box>
              <Box
                maxW="40rem"
                w={{ base: '100%', lg: '80%', xl: '80%' }}
                justifySelf="center"
                display={{ base: 'block', lg: 'none', xl: 'none' }}
              >
                <ButtonDefault />
              </Box>
            </Grid>
          </Wrapper>
        </chakra.section>
        <chakra.section display={{ base: 'block', lg: 'none', xl: 'none' }} mb="2rem">
          <Wrapper>
            <Flex flexWrap="wrap" justifyContent="center" gap="2rem" textStyle="paragraph">
              <ButtonDefault />
              <Box>
                <Heading as="h4" size="md" textAlign="center" mb="2rem">
                  {' '}
                  teste grátis por 7 dias
                </Heading>
                <Text textAlign="center" fontWeight="bold">
                  Risco zero! Experimente, se não gostar, não paga. Nosso programa é completo, tenho
                  certeza que você transformará sua vida para sempre. Venha bater um papo com a
                  gente, vamos descobrir a melhor estratégia para você!
                </Text>
              </Box>

              <Image src={stamp} alt="selo" />
              <Image src={payments} alt="pagamentos" />
            </Flex>
          </Wrapper>
        </chakra.section>
      </chakra.main>
      <Footer />
    </>
  );
};

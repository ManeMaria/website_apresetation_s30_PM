import { chakra } from '@chakra-ui/react';

import AOS from 'aos';

import { Footer } from '@/components/';

import { useEffect } from 'react';
import { Banner } from './Banner';

import { ApresentationVideo } from './ApresentationVideo';

import { HowItWorks } from './mobile/HowItWorks';
import { MyHistory } from './MyHistory';
import { Depositions } from './Depositions/inde';
import { Bonus } from './Bonus';
import { Description } from './Description';
import { Price } from './Price';
import { PaymentsMethods } from './mobile/PaymentsMethods';
import { BeforeAndAfter } from './BeforeAndAfter';

export const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <chakra.main>
        <Banner />
        <ApresentationVideo />
        <BeforeAndAfter />
        <HowItWorks />
        <MyHistory />
        <Depositions />
        <Description />
        <Bonus />
        <Price />
        <PaymentsMethods />
      </chakra.main>
      <Footer />
    </>
  );
};

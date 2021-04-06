import Header from 'src/layout/elements/Header';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FunctionComponent } from 'react';
import Footer from './elements/Footer';

const Main = styled(motion.main)`
  padding: 0 2%;
  flex-grow: 1;

  @media (min-width: 800px) {
    padding: 0 15%;
  }
`;

const ContentArea = styled(motion.div)`
  overflow-x: hidden;
  min-height: calc(100vh - 55px - 55px);
  display: flex;
  flex-direction: column;
`;

const contentVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

interface iPagelayout {
  title: string;
  description: string;
}

const PageLayout: FunctionComponent<iPagelayout> = ({
  title,
  description,
  children,
}) => (
  <ContentArea variants={contentVariants}>
    <Header title={title} description={description} />
    <Main>{children}</Main>
    <Footer />
  </ContentArea>
);

export default PageLayout;

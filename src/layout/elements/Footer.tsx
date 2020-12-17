import styled from 'styled-components';
import { format } from 'date-fns';
import packageJSON from 'package.json';
import { Grid, GridItem } from 'src/components/Grid';
import Link from 'next/link';
import { motion } from 'framer-motion';

const StyledFooter = styled.footer`
  position: relative;
  padding-top: 200px;
  transition: all 0.25s;

  @media (min-width: 900px) {
    padding-top: 250px;
  }
  @media (min-width: 1000px) {
    padding-top: 300px;
  }
  @media (min-width: 1400px) {
    padding-top: 350px;
  }
`;

const FooterBackground = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 150%;
  min-height: 350px;
  z-index: -1;
  background: var(--color-red);
  transform: rotateZ(-5deg) translate(-50%, -90%);
  opacity: 0.8;
  transition: all 0.25s;
  box-shadow: var(--box-shadow-elev-1);

  @media (min-width: 800px) {
    transform: rotateZ(-5deg) translate(-50%, -80%);
  }
  @media (min-width: 900px) {
    transform: rotateZ(-5deg) translate(-50%, -80%);
  }

  @media (min-width: 1000px) {
    transform: rotateZ(-5deg) translate(-50%, -90%);
  }
  @media (min-width: 1400px) {
    transform: rotateZ(-5deg) translate(-50%, -100%);
  }
`;

const FooterContentArea = styled.div`
  background: var(--color-grey-intermediate);
  padding: 2rem;
`;

const FooterContent = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  text-align: center;
  color: var(--color-grey-darker);
  font-size: 1.5rem;

  a {
    color: var(--color-white-80);
    text-decoration: none;
    border-bottom: 2px solid var(--color-red-80);
    transition: all 0.25s;

    &:hover {
      color: var(--color-white-100);
      border-bottom: 5px solid var(--color-red);
    }
  }
`;

const SiteInfo = styled.div`
  background: var(--color-grey-darker);
  padding: 2rem;
`;

const Separator = styled.span`
  border: 1px solid var(--color-red);
  margin: 0 5px;
`;

const FooterIcon = styled(motion.img)`
  max-width: 60px;
`;

const FooterIconVariants = {
  initial: {
    transform: 'scale3d(1,1,1)',
  },
  hover: {
    transform: 'scale3d(1.5,1.5,1)',
  },
};

const FooterHeading = styled.h3`
  margin-bottom: 0;
`;

const FooterSubheading = styled.p`
  margin-top: 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterBackground />
      <FooterContentArea>
        <FooterContent>
          <Grid columns={2} gap='50px' marginBottom={false}>
            <GridItem>
              <FooterHeading>Follow Me</FooterHeading>
              <FooterSubheading>
                Be sure to see the latest and greatest
              </FooterSubheading>
              <Grid colums={5} min='60px' marginBottom={false} justify='center'>
                <FooterIcon
                  loading='lazy'
                  src='/svg/github.svg'
                  alt='Github'
                  whileHover='hover'
                  variants={FooterIconVariants}
                />
                <FooterIcon
                  loading='lazy'
                  src='/svg/linkedin.svg'
                  alt='LinkedIn'
                  whileHover='hover'
                  variants={FooterIconVariants}
                />
                <FooterIcon
                  loading='lazy'
                  src='/svg/instagram.svg'
                  alt='Instagram'
                  whileHover='hover'
                  variants={FooterIconVariants}
                />
                <FooterIcon
                  loading='lazy'
                  src='/svg/twitter.svg'
                  alt='Twitter'
                  whileHover='hover'
                  variants={FooterIconVariants}
                />
                <FooterIcon
                  loading='lazy'
                  src='/svg/youtube.svg'
                  alt='YouTube'
                  whileHover='hover'
                  variants={FooterIconVariants}
                />
              </Grid>
            </GridItem>
            <GridItem>
              <p>
                Use of this site constitues acceptance of our{' '}
                <Link href='/privacy-policy'>
                  <a>Privacy Policy</a>
                </Link>
                . The material on this site may not be reproduced, distributed,
                transmitted, cached or otherwise used, except with prior written
                permission of Christopher Lee Miller.
              </p>
              <p>
                Copyright © {format(new Date(), 'yyyy')}
                <Separator />v{packageJSON.version}
              </p>
            </GridItem>
          </Grid>
        </FooterContent>
      </FooterContentArea>
      <SiteInfo />
    </StyledFooter>
  );
};

export default Footer;

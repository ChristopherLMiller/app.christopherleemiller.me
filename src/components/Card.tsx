import { FunctionComponent } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

let easing = [0.175, 0.85, 0.42, 0.96];

const variants = {
  exit: {
    y: 150,
    opactiy: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

const StyledCard = styled.div`
  color: black;
  font-family: var(--font-main);
  font-weight: 300;
  max-width: 1000px;
  margin: 0 auto;
`;

const CardHeading = styled.div`
  background: var(--color-red);
  padding: 3% 5%;
  color: var(--color-white);
  font-family: var(--font-main);
  text-align: center;
`;

const CardHeadingHeading = styled.h2`
  margin: 0;
  font-size: 4rem;
  font-weight: 300;
`;
const CardHeadingSubHeading = styled.h3`
  margin: 0;
  font-size: 2rem;
  font-weight: 300;
`;

interface iCardBody {
  padding?: boolean;
}

const CardBody = styled.div`
  background: var(--color-grey-light);
  padding: ${(props: iCardBody) => (props.padding ? `3% 5%` : `0`)};
  font-size: var(--p-responsive);
  letter-spacing: -1px;
  text-align: center;
  a {
    color: var(--color-red);
    :hover {
      text-decoration: underline;
    }
  }
  p {
    word-break: break-word;
    a {
      color: var(--color-red);
      :hover {
        text-decoration: underline;
      }
    }
  }
`;

const ActionLinks = styled.div`
  border-top: 2px solid var(--color-red-transparent);
  padding: 5px;
`;

interface iActionLink {
  href: string;
  title: string;
}

interface CardProps {
  children: object;
  heading?: string;
  subHeading?: string;
  padding?: boolean;
  actionLinks?: Array<iActionLink>;
}

const Card: FunctionComponent<CardProps> = ({
  heading,
  subHeading,
  children,
  padding = true,
  actionLinks,
}) => (
  <motion.div variants={variants}>
    <StyledCard>
      {(heading || subHeading) && (
        <CardHeading>
          {heading && <CardHeadingHeading>{heading}</CardHeadingHeading>}
          {subHeading && (
            <CardHeadingSubHeading>{subHeading}</CardHeadingSubHeading>
          )}
        </CardHeading>
      )}

      <CardBody padding={padding}>
        {children}
        {actionLinks && (
          <ActionLinks>
            {actionLinks?.map((link) => (
              <Link href={link.href} key={link.title}>
                <a>{link.title}</a>
              </Link>
            ))}
          </ActionLinks>
        )}
      </CardBody>
    </StyledCard>
  </motion.div>
);

export default Card;

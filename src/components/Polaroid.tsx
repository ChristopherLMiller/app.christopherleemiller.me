import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import Image from 'next/image';

const StyledPolaroid = styled(motion.div)`
  padding: 15px;
  background: var(--color-white-100);
  cursor: pointer;
  height: min-content;
`;

const PolaroidCaption = styled.p`
  font-family: var(--font-marker);
  color: var(--text-color);
  font-size: 3rem;
  margin: 15px 0;
`;

const PolaroidContent = styled.div`
  font-family: var(--font-marker);
  color: var(--color-black-80);
  font-size: 2rem;
  margin: 15px 0;
`;

const hoverState = {
  scale: 1.05,
};

interface iPolaroid {
  src: string;
  width: number;
  height: number;
  alt?: string;
  caption?: string;
  link?: {
    as: string;
    href: string;
  };
}

const Polaroid: FunctionComponent<iPolaroid> = ({
  src,
  width,
  height,
  alt,
  caption,
  link,
  children,
}) => {
  if (link != null) {
    return (
      <Link as={link.as} href={link.href}>
        <StyledPolaroid whileHover={hoverState}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            layout="responsive"
            placeholder="blur"
            blurDataURL={`https://res.cloudinary.com/christopherleemiller/image/upload/e_blur:200/v1621611397/${src}`}
          />
          {caption && <PolaroidCaption>{caption}</PolaroidCaption>}
          <PolaroidContent>{children}</PolaroidContent>
        </StyledPolaroid>
      </Link>
    );
  }

  return (
    <StyledPolaroid whileHover={hoverState}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout="responsive"
        placeholder="blur"
        blurDataURL={`https://res.cloudinary.com/christopherleemiller/image/upload/e_blur:200/v1621611397/${src}`}
      />
      {caption && <PolaroidCaption>{caption}</PolaroidCaption>}
      <PolaroidContent>{children}</PolaroidContent>
    </StyledPolaroid>
  );
};

export default Polaroid;

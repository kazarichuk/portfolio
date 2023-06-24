import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const AnimatedIcon = ({ src }) => {
  return <Image src={src} alt="" />;
};

export default AnimatedIcon;

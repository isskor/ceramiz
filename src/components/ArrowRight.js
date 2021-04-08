import React from 'react';
import styled from 'styled-components';

const StyledArrow = styled.svg`
  margin: 1rem;
`;

function ArrowRight() {
  return (
    <StyledArrow
      width='14'
      height='36'
      viewBox='0 0 14 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        width='21.0778'
        height='2.15882'
        rx='1.07941'
        transform='matrix(0.551372 0.834259 -0.551372 0.834259 1.64844 0)'
        fill='#7B7B7B'
      />
      <rect
        width='21.5849'
        height='2.15882'
        rx='1.07941'
        transform='matrix(0.551372 -0.834259 0.551372 0.834259 0.0273438 34.1992)'
        fill='#7B7B7B'
      />
    </StyledArrow>
  );
}

export default ArrowRight;

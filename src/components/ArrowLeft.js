import React from 'react';
import styled from 'styled-components';

const StyledArrow = styled.svg`
  margin: 1rem;
`;

function ArrowLeft() {
  return (
    <StyledArrow
      width='13'
      height='36'
      viewBox='0 0 13 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        width='20.9612'
        height='2.14688'
        rx='1.07344'
        transform='matrix(-0.544284 0.838901 0.544284 0.838901 11.4082 0)'
        fill='#7B7B7B'
      />
      <rect
        width='21.4654'
        height='2.14688'
        rx='1.07344'
        transform='matrix(-0.544284 -0.838901 -0.544284 0.838901 13 34.1992)'
        fill='#7B7B7B'
      />
    </StyledArrow>
  );
}

export default ArrowLeft;

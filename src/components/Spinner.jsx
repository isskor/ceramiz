import React from 'react';
import styled from 'styled-components';

const SpinnerSvg = styled.svg`
  @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  -webkit-animation: rotating 2s linear infinite;
  -moz-animation: rotating 2s linear infinite;
  -ms-animation: rotating 2s linear infinite;
  -o-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;
`;

function Spinner() {
  return (
    <SpinnerSvg
      width='26'
      height='29'
      viewBox='0 0 26 29'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M25 13C25 10.6266 24.2962 8.30655 22.9776 6.33316C21.6591 4.35977 19.7849 2.8217 17.5922 1.91345C15.3995 1.00519 12.9867 0.767554 10.6589 1.23058C8.33114 1.6936 6.19295 2.83649 4.51472 4.51472C2.83649 6.19295 1.6936 8.33114 1.23058 10.6589C0.767554 12.9867 1.00519 15.3995 1.91345 17.5922C2.8217 19.7849 4.35977 21.6591 6.33316 22.9776C8.30655 24.2962 10.6266 25 13 25'
        stroke='black'
      />
      <path d='M10 22L13 25.1579L10 28' stroke='black' />
    </SpinnerSvg>
  );
}

export default Spinner;

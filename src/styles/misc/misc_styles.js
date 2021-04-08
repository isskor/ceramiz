import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background: black;
  /* color: white; */
  color: white;
  cursor: pointer;
  border-radius: 4px;
  font-family: 'Baloo 2', cursive;
  padding: 0.75em 1em;
  @media (min-width: 1200px) {
    padding: 1em 2em;
  }
`;

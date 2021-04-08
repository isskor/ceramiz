import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Header1 = styled.h1`
  font-size: 3rem;
  font-family: 'Baloo 2', cursive;
  font-weight: 600;
  color: #424242;
  /* font-size: 4rem; */
`;

export const Header2 = styled.h2`
  font-family: 'Lato', sans-serif;
  /* font-size: 2rem; */
  font-size: 1.6rem;
`;

export const Header3 = styled.h3`
  font-family: 'Baloo 2', cursive;
  font-size: 1.5rem;
  font-weight: 500;
`;
export const Header4 = styled.h4`
  font-family: 'Lato', sans-serif;

  font-size: 1.2rem;
  font-weight: 500;
`;
export const Header5 = styled.h5`
  font-family: 'Lato', sans-serif;

  font-size: 1.1rem;
  font-weight: 500;
`;

export const Paragraph = styled.p`
  line-height: 2rem;
  font-family: 'Lato', sans-serif;
`;

export const Input = styled.input`
  background: transparent;
  outline: none;
  border: 1px solid #adadad;
  padding: 1rem;
  margin-bottom: 1rem;
  font-family: 'Lato', sans-serif;
`;

export const Label = styled.label`
  font-family: 'Lato', sans-serif;
`;

export const Error = styled(Paragraph)`
  color: #c35a5a;
`;

export const Span = styled.span`
  font-family: 'Lato', sans-serif;
`;

export const Form = styled.form`
  max-width: 500px;

  input {
    background: transparent;
    outline: none;
    border: 1px solid #adadad;
    padding: 1rem;
    margin-bottom: 1rem;
    font-family: 'Lato', sans-serif;
  }
  label {
    font-family: 'Lato', sans-serif;
  }
`;

export const Links = styled(Link)`
  text-decoration: none;
  font-family: 'Baloo 2', cursive;
  font-size: 1.2rem;
  color: #424242;
  display: block;
`;

import styled from 'styled-components';

export const Container = styled.section`
  padding: 5rem 2rem;
  @media (min-width: 768px) {
    padding: 8rem 5rem;
  }
  @media (min-width: 1200px) {
    padding: 15rem 10rem;
  }
  @media (min-width: 1400px) {
    padding: 15rem 15rem 5rem;
  }
`;

export const Wrapper = styled.section`
  padding: 2rem;
  @media (min-width: 576px) {
    padding: 5rem 2rem;
  }
  @media (min-width: 768px) {
    padding: 5rem;
  }
  @media (min-width: 1200px) {
    padding: 5rem 10rem;
  }
  @media (min-width: 1400px) {
    padding: 5rem 15rem;
  }
`;

export const FlexContainer = styled(Container)`
  display: flex;
  justify-content: center;
`;

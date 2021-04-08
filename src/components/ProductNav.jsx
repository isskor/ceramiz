import React from 'react';
import { useLocation } from 'react-router-dom';
// styles
import styled from 'styled-components';
import { Links } from '../styles/typography/typographyStyles';

function ProductNav() {
  const { pathname } = useLocation();

  const paths = pathname.split('/');
  paths.shift();

  const pathUrl = (i) => {
    const c = paths.map((a) => a);
    const a = c.splice(0, i);
    const b = a.reduce((acc, cur) => acc + '/' + cur);
    return b;
  };

  return (
    <StyledProductNav>
      <ul>
        {paths.map((link, i) => (
          <li key={link}>
            <Links to={'/' + pathUrl(i + 1)}>
              {link} {i === paths.length - 1 ? '' : '/ '}{' '}
            </Links>
          </li>
        ))}
      </ul>
    </StyledProductNav>
  );
}

export default ProductNav;
const StyledProductNav = styled.nav`
  flex: 100%;
  margin-bottom: 1rem;
  ul {
    display: flex;
    li {
      text-transform: capitalize;
      a {
        font-size: 0.9rem;
      }
    }
  }
`;

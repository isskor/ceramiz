import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// redux state, selectors, actions
import { selectCurrentUser } from '../features/userSlice';
// components
import LogoutBtn from './LogoutBtn';
// styling
import styled from 'styled-components';

function AccountDropdown({ openAccount, setOpenAccount }) {
  const currentUser = useSelector(selectCurrentUser);

  const handleClick = () => {
    setOpenAccount(false);
  };

  const handleLogout = () => {
    setOpenAccount(false);
  };

  return (
    <>
      {openAccount && (
        <div>
          {currentUser ? (
            <StyledAccountDropdown>
              <li onClick={handleClick}>
                <Link to='/purchases'>My purchases</Link>
              </li>
              <li onClick={handleClick}>
                <Link to='/settings'>My settings</Link>
              </li>
              <li onClick={handleLogout}>
                <LogoutBtn />
              </li>
            </StyledAccountDropdown>
          ) : (
            <StyledAccountDropdown>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/register'>register</Link>
              </li>
            </StyledAccountDropdown>
          )}
        </div>
      )}
    </>
  );
}

export default AccountDropdown;

const StyledAccountDropdown = styled.ul`
  position: absolute;
  background: white;
  right: 2rem;
  width: 100%;

  animation: fade 0.3s ease forwards;
  li {
    width: 100%;
    > a {
      font-size: 1.2rem;
      margin: 1rem;
    }
    button {
      width: 100%;
      margin: 0;
    }
  }
  @keyframes fade {
    from {
      margin-top: -5rem;
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

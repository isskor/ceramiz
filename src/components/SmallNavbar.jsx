import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// redux state, selectors, actions
import { selectCart } from '../features/cartSlice';
import { selectCurrentUser } from '../features/userSlice';
// components
import CartDropdown from './CartDropdown';
import LogoutBtn from './LogoutBtn';
// styles
import styled from 'styled-components';

function SmallNavbar() {
  const [openCart, setOpenCart] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const cart = useSelector(selectCart);
  const currentUser = useSelector(selectCurrentUser);

  return (
    <StyledNavContainer>
      <StyledNav>
        <div className='lines' onClick={() => setOpenNav(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className='logo'>
          <Link to='/'>
            <span className='c'>C</span>era<span className='m'>M</span>iz
          </Link>
        </div>
        {openNav && (
          <NavList>
            <Link to='/'>
              <span className='c'>C</span>era<span className='m'>M</span>iz
            </Link>
            <div className='close'>
              <div className=' lines' onClick={() => setOpenNav(false)}>
                <span className='closeOne'></span>
                <span className='close2'></span>
              </div>
            </div>
            <li>
              <Link to='/collections'>Collections</Link>
            </li>
            <li>
              <Link to='/about'>Our Story</Link>
            </li>

            {currentUser && (
              <>
                <li className='user'>
                  <Link to='/purchases'>My Account</Link>
                </li>
                <li className='logout'>
                  <LogoutBtn />
                </li>
              </>
            )}
            {!currentUser && (
              <>
                <li>
                  <Link to='/login'>Login</Link>
                </li>
                <li>
                  <Link to='/register'>Register</Link>
                </li>
              </>
            )}
          </NavList>
        )}
        <div className='cart'>
          <Link to='/cart'>
            Cart{' '}
            <span>
              <span className='m'>(</span>
              {cart.length}
              <span className='m'>)</span>
            </span>
          </Link>
          <CartDropdown openCart={openCart} setOpenCart={setOpenCart} />
        </div>
      </StyledNav>
    </StyledNavContainer>
  );
}

export default SmallNavbar;

const StyledNavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  @media (min-width: 768px) {
    display: none;
  }

  .lines {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    span {
      width: 30px;
      margin: 3px;
      height: 3px;
      background: black;
    }
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background: white;
  transition: all 0.3s ease;
  .lines {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    span {
      width: 30px;
      margin: 3px;
      height: 3px;
      background: black;
    }
  }

  .c,
  .m {
    color: #c3a080;
    font-size: 1.4rem;
    font-weight: 500;
  }
  .m {
    color: #dea5a5;
  }

  a,
  span {
    font-size: 1rem;
    text-decoration: none;
    text-decoration: none;
    font-family: 'Baloo 2', cursive;
    color: #424242;
  }
`;

const NavList = styled.ul`
  background: white;
  position: absolute;
  height: 100vh;
  width: 60vw;
  left: 0;
  li > a,
  li > span {
    display: block;
    padding: 1.5rem;
  }
  .logout {
    position: absolute;
    width: 100%;
    bottom: 0;
    button {
      width: 100%;
      border-radius: 0;
    }
  }
  .close {
    text-align: end;
    .lines {
      margin-left: auto;
      width: 50px;
      height: 50px;
      display: grid;
      .closeOne {
        grid-area: 1/1/1/1;
        transform: rotate(45deg);
      }
      .close2 {
        grid-area: 1/1/1/1;
        transform: rotate(-45deg);
      }
    }
  }
`;

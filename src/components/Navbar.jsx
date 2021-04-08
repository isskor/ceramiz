import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// redux state, selectors, actions
import { selectCart } from '../features/cartSlice';
// components
import AccountDropdown from './AccountDropdown';
import CartDropdown from './CartDropdown';
import CollectionDropdown from './CollectionDropdown';
// styles
import styled from 'styled-components';

function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  const [openCollection, setOpenCollection] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);
  const cart = useSelector(selectCart);

  return (
    <StyledNavContainer>
      <StyledNav expanded={openCollection || openCart}>
        <div className='logo'>
          <Link to='/'>
            <span className='c'>C</span>era<span className='m'>M</span>iz
          </Link>
        </div>
        <NavList>
          <li
            onMouseOver={(e) => {
              setOpenCollection(true);
            }}
            onMouseLeave={() => setOpenCollection(false)}
          >
            <Link to='/collections'>Collections</Link>
            <CollectionDropdown
              openCollection={openCollection}
              setOpenCollection={setOpenCollection}
            />
          </li>
          <li>
            <Link to='/about'>Our Story</Link>
          </li>

          <li
            className='myAccount'
            onMouseOver={(e) => {
              setOpenAccount(true);
            }}
            onMouseLeave={() => setOpenAccount(false)}
          >
            <span>My Account</span>
            <AccountDropdown
              openAccount={openAccount}
              setOpenAccount={setOpenAccount}
            />
          </li>

          <li
            className='cart'
            onMouseOver={() => setOpenCart(true)}
            onMouseLeave={() => setOpenCart(false)}
          >
            <Link to='/cart'>
              Cart{' '}
              <span>
                <span className='m'>(</span>
                {cart.length}
                <span className='m'>)</span>
              </span>
            </Link>
            <CartDropdown openCart={openCart} setOpenCart={setOpenCart} />
          </li>
        </NavList>
      </StyledNav>
    </StyledNavContainer>
  );
}

export default Navbar;

const StyledNavContainer = styled.div`
  display: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  @media (min-width: 768px) {
    display: block;
  }
`;

const StyledNav = styled.nav`
  .c,
  .m {
    color: #c3a080;
    font-size: 1.6rem;
    font-weight: 500;
  }
  .m {
    color: #dea5a5;
  }
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  /* padding: 0rem 10rem; */
  /* box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2); */
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.45),
    transparent
  );
  border-bottom: ${(props) => (props.expanded ? '1px solid gray' : '')};
  background: ${(props) => (props.expanded ? 'white' : '')};

  backdrop-filter: blur(3px);
  transition: all 0.3s ease;
  &:hover {
    background: white;
    a,
    li > span {
      padding: 2rem 0;
    }
  }
  li > a,
  a,
  li > span {
    transition: all 0.3s ease;
    text-decoration: none;
    font-family: 'Baloo 2', cursive;
    color: #424242;
    padding: ${(props) => (props.expanded ? '2rem 0rem' : '1rem 0rem')};

    display: block;
    height: 100%;
    margin: 0 1rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    @media (min-width: 992px) {
      font-size: 1.4rem;
      margin: 0 2rem;
    }
  }

  .logo {
    flex: 0.2;
  }
`;

const NavList = styled.ul`
  flex: 0.8;
  display: flex;
  list-style: none;
  width: 100%;

  .myAccount {
    margin-left: auto;
    position: relative;
    cursor: pointer;
  }
  .cart {
    span {
      font-size: 1.4rem;
    }
  }
`;

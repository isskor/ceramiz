import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// redux state, selectors, actions
import { selectCart, selectSubTotal } from '../features/cartSlice';
// components
import CartDropdownItem from './CartDropdownItem';
// styles
import styled from 'styled-components';

function CartDropdown({ openCart, setOpenCart }) {
  const cart = useSelector(selectCart);
  const subTotal = useSelector(selectSubTotal);

  return (
    <>
      {openCart && (
        <StyledDropDown openCart={openCart}>
          <p className='cartLength'>
            {cart.length} item{cart.length > 1 ? 's' : ''} in Cart
          </p>
          <div className='item'>
            {cart.length > 0 &&
              cart.map((item) => (
                <CartDropdownItem item={item} key={item.id} />
              ))}
          </div>
          <div className='checkout'>
            <div className='total'>
              <span>Total:</span>
              <span>{subTotal}</span>
            </div>
            <button onClick={() => setOpenCart(false)}>
              <Link to='/cart'>Checkout</Link>
            </button>
          </div>
        </StyledDropDown>
      )}
    </>
  );
}

export default CartDropdown;

const StyledDropDown = styled.div`
  background: white;
  width: 350px;
  overflow: scroll;
  position: absolute;
  right: 0;

  animation: fade 0.3s ease forwards;
  z-index: 2;
  @keyframes fade {
    from {
      margin-top: -5rem;
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #b8b8b8;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .cartLength {
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid gray;
  }

  .item {
    max-height: 300px;
  }

  .checkout {
    box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 350px;
    background: white;
    .total {
      padding: 1rem;
      display: flex;
      justify-content: space-between;
    }

    button {
      width: 100%;
      padding: 1em;
      background: black;
      a {
        color: white;
        display: block;
        text-decoration: none;
        padding: 0;
      }
    }
  }
`;

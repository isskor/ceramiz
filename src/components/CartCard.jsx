import React from 'react';
import { useDispatch } from 'react-redux';

// redux state, selectors, actions
import {
  addToCart,
  decreaseFromCart,
  removeItemFromCart,
} from '../features/cartSlice';
// components
import CollectionItemSmall from './CollectionItemSmall';
// styles
import styled from 'styled-components';
import * as Typography from '../styles/typography/typographyStyles';

function CartCard({ item }) {
  const dispatch = useDispatch();

  return (
    <StyledCartItem>
      <CollectionItemSmall item={item} />
      <Typography.Paragraph>${item.price}</Typography.Paragraph>
      <StyledQuantityCtn>
        <button
          type='button'
          className='decrease'
          onClick={() => dispatch(decreaseFromCart(item))}
        >
          -
        </button>
        <Typography.Paragraph className='quantity'>
          {item.quantity}
        </Typography.Paragraph>

        <button
          type='button'
          className='increase'
          onClick={() => dispatch(addToCart({ product: item }))}
        >
          +
        </button>
        <button
          className='remove'
          onClick={() => dispatch(removeItemFromCart(item))}
        >
          Remove
        </button>
      </StyledQuantityCtn>
      <Typography.Paragraph>${item.price * item.quantity}</Typography.Paragraph>
    </StyledCartItem>
  );
}

export default CartCard;

const StyledCartItem = styled.div`
  display: grid;
  grid-template-columns: 3fr repeat(3, 1fr);
  justify-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const StyledQuantityCtn = styled.div`
  height: 100%;
  display: grid;
  align-items: start;
  justify-content: center;
  @media (min-width: 992px) {
    display: block;
  }

  .quantity {
    display: inline-block;
    padding: 0 2rem 2rem;
    justify-self: flex-end;
  }
  .increase {
    grid-area: 2/1/2/1;
    justify-self: end;
  }
  .decrease {
    grid-area: 2/1/2/1;
  }
  button {
    border: none;
    outline: none;
    width: 30px;
    height: 30px;
    border-radius: 4px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    font-family: 'Lato', sans-serif;
  }

  .remove {
    background: transparent;
    width: auto;
    height: auto;
    box-shadow: none;
    display: block;
    margin: 0 auto;
    justify-self: flex-end;
    margin-top: auto;
  }
`;

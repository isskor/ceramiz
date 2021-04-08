import React from 'react';
import { useDispatch } from 'react-redux';
// redux state, selectors, actions
import {
  addToCart,
  decreaseFromCart,
  removeItemFromCart,
} from '../features/cartSlice';
// styles
import styled from 'styled-components';

function CartItem({ item, small }) {
  const dispatch = useDispatch();

  return (
    <CartItemContainer>
      <CartItemInfo>
        <ImageContainer small={small}>
          <img src={`/assets/images/${item.imageUrl}.jpg`} alt={item.name} />
        </ImageContainer>
        <CartItemDescription>
          <a href=''>{item.name}</a>
          <ul>
            {item.set.map((set) => (
              <li key={set.productId}>
                {set.name} x {set.quantity} ({set.quantity * item.quantity})
              </li>
            ))}
          </ul>
        </CartItemDescription>
      </CartItemInfo>
      <div className='item-price'>{item.price}</div>
      <QuantityContainer>
        <button type='button' onClick={() => dispatch(decreaseFromCart(item))}>
          -
        </button>
        <span>{item.quantity}</span>
        <button
          type='button'
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
      </QuantityContainer>
      <div className='item-total'>{item.price * item.quantity}</div>
    </CartItemContainer>
  );
}

export default CartItem;

const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr repeat(3, 1fr);
  align-items: center;
  justify-items: center;

  &::after {
    content: '';
    grid-column: 1 /5;
    height: 1px;
    width: 100%;
    margin: 1rem;
    background: rgba(0, 0, 0, 0.1);
  }
`;
const CartItemInfo = styled.div`
  display: flex;
  justify-self: start;
`;
const ImageContainer = styled.div`
  flex: 25%;
  img {
    min-width: 150px;
    height: 150px;
    object-fit: cover;
  }
`;

const CartItemDescription = styled.div`
  flex: 75%;
  padding: 0 2rem;
  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: white;
  }
  ul {
    display: flex;
    padding-top: 1rem;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    li {
      display: inline-block;
      flex: 40%;
    }
  }
`;

const QuantityContainer = styled.div`
  padding-top: 24px;

  span {
    display: inline-block;
    padding: 2rem;
  }
  button {
    border: none;
    outline: none;
    width: 30px;
    height: 30px;
    border-radius: 4px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  .remove {
    background: transparent;
    width: auto;
    height: auto;
    box-shadow: none;
    display: block;
    margin: 0 auto;
  }
`;

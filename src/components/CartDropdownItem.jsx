import React from 'react';
import { useDispatch } from 'react-redux';
// redux state, selectors, actions
import { addToCart, decreaseFromCart } from '../features/cartSlice';
// styles
import styled from 'styled-components';

function CartDropdownItem({ item }) {
  const dispatch = useDispatch();
  return (
    <DropDownItem>
      <div className='img'>
        <img
          src={`/assets/images/${item.imageUrl}.jpg`}
          alt={item.name}
          loading='lazy'
        />
      </div>
      <div className='info'>
        <p>{item.name}</p>
        <QuantityContainer>
          <button
            type='button'
            onClick={() => dispatch(decreaseFromCart(item))}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            type='button'
            onClick={() => dispatch(addToCart({ product: item }))}
          >
            +
          </button>
        </QuantityContainer>
      </div>
      <div className='price'>
        <p>{item.price * item.quantity}</p>
      </div>
    </DropDownItem>
  );
}

export default CartDropdownItem;

const DropDownItem = styled.div`
  display: flex;
  padding: 1rem;
  width: 350px;
  border-bottom: 1px solid gray;

  .img {
    img {
      height: 100px;
      width: 100px;
      object-fit: cover;
    }
  }

  .info {
    padding: 0 2rem;
    justify-self: start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .price {
    align-self: center;
    margin-left: auto;
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  span {
    display: inline-block;
    padding: 0 1rem;
  }
  button {
    border: none;
    outline: none;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .remove {
    flex: 100%;
    background: transparent;
    width: auto;
    height: auto;
    box-shadow: none;
    display: block;
    margin: 0 auto;
  }
`;

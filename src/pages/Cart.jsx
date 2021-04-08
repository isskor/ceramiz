import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
// redux state, selectors, actions
import { clearCart, selectCart, selectSubTotal } from '..//features/cartSlice';
// components
import CartCard from '../components/CartCard';
// styling
import styled from 'styled-components';
import * as Layout from '../styles/layout/page_layout_styles';
import * as Typography from '../styles/typography/typographyStyles';
import { Button } from '../styles/misc/misc_styles';

function Checkout() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const subTotal = useSelector(selectSubTotal);
  const history = useHistory();

  return (
    <StyledCart>
      <Typography.Header3>
        {cart.length} product{cart.length > 1 ? 's' : ''}
      </Typography.Header3>
      <div>
        <StyledLabelList>
          <Typography.Paragraph className='product'>
            Product
          </Typography.Paragraph>
          <Typography.Paragraph>Price</Typography.Paragraph>
          <Typography.Paragraph>Quantity</Typography.Paragraph>
          <Typography.Paragraph>Total</Typography.Paragraph>
        </StyledLabelList>
        {cart.length > 0 &&
          cart.map((cartItem) => (
            <CartCard item={cartItem} key={cartItem.id} />
          ))}
        <Button className='clear' onClick={() => dispatch(clearCart())}>
          Clear Cart
        </Button>
      </div>

      <div className='total'>
        <Typography.Header3>SubTotal : ${subTotal}</Typography.Header3>
        {cart.length > 0 ? (
          <Button onClick={() => history.push('/checkout')}>Checkout</Button>
        ) : (
          <Typography.Header3>Cart is empty</Typography.Header3>
        )}
      </div>
    </StyledCart>
  );
}

export default Checkout;

const StyledCart = styled(Layout.FlexContainer)`
  flex-direction: column;
  gap: 1rem;

  h3 {
    flex: 100%;
  }

  .total {
    margin-top: 1rem;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
  }
  .clear {
    background: #dea5a5;
    padding: 0.5rem;
    margin: 1rem 0;
  }
`;

const StyledLabelList = styled.div`
  display: grid;
  grid-template-columns: 3fr repeat(3, 1fr);
  justify-items: center;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .product {
    justify-self: start;
  }
`;

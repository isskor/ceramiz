import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
// redux state, selectors, actions
import { clearCart, selectCart, selectSubTotal } from '..//features/cartSlice';
import { addOrder } from '../features/checkoutSlice';
import { selectCurrentUser } from '../features/userSlice';
// styles
import styled from 'styled-components';
import * as Layout from '../styles/layout/page_layout_styles';
import * as Typography from '../styles/typography/typographyStyles';
import { Button } from '../styles/misc/misc_styles';

function Checkout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const subTotal = useSelector(selectSubTotal);
  const cart = useSelector(selectCart);
  const currentUser = useSelector(selectCurrentUser);
  const [checkoutInfo, setCheckoutInfo] = useState({});

  function handleChange(e) {
    setCheckoutInfo({ ...checkoutInfo, [e.target.name]: e.target.value });
  }

  const checkoutStatus = useSelector((state) => state.checkout.status);
  const checkoutError = useSelector((state) => state.checkout.error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const timestamp = new Date().toISOString();
    const info = { ...checkoutInfo, timestamp, subTotal };
    dispatch(addOrder({ info, cart }));
  };
  useEffect(() => {
    if (currentUser) {
      setCheckoutInfo((checkoutInfo) => ({
        ...checkoutInfo,
        userId: currentUser.id,
        name: currentUser.name,
        email: currentUser.email,
      }));
    }

    if (checkoutStatus === 'fulfilled') {
      history.push('/receipt');
      dispatch(clearCart());
    }
  }, [currentUser, checkoutStatus, history, dispatch]);

  return (
    <StyledCheckout>
      <Typography.Header2>Checkout</Typography.Header2>

      <StyledCheckoutForm onChange={handleChange} onSubmit={handleSubmit}>
        <Typography.Header3>Shipping Information</Typography.Header3>
        <label htmlFor='name'>Full Name</label>
        <input
          type='text'
          name='name'
          value={checkoutInfo.name || ''}
          onChange={handleChange}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          value={checkoutInfo.email || ''}
          onChange={handleChange}
        />
        <label htmlFor='address'>Address Street</label>
        <input type='text' name='address' />
        <label htmlFor='addressNumber'>Address Number</label>
        <input type='text' name='addressNumber' />
        <label htmlFor='zipCode'>Zip code</label>
        <input type='text' name='zipCode' />
        <label htmlFor='city'>City</label>
        <input type='text' name='city' />
        {checkoutError && <Typography.Error>{checkoutError}</Typography.Error>}
        <Button type='submit'>Submit</Button>
      </StyledCheckoutForm>
      <StyledCheckoutForm
        billing={true}
        onChange={handleChange}
        onSubmit={handleSubmit}
        disable
      >
        <Typography.Header3>Billing Information</Typography.Header3>
        <label htmlFor='cardName'>Full Name</label>
        <input
          type='text'
          name='cardName'
          value={checkoutInfo.name || ''}
          disabled
        />

        <label htmlFor='cardNumber'>Card Number</label>
        <input type='text' name='cardNumber' disabled />
        <div className='half_input'>
          <div className='half'>
            <label htmlFor='cardMonth'>Expiration Month</label>
            <input type='text' name='cardDate' disabled />
          </div>
          <div className='half'>
            <label htmlFor='cardYear'>Expiration Year</label>
            <input type='text' name='cardYear' disabled />
          </div>
          <div className='half'>
            <label htmlFor='CVC'>CVC</label>
            <input type='text' name='CVC' disabled />
          </div>
        </div>

        <Button type='submit' disabled>
          Disabled, this is not a commercial site
        </Button>
      </StyledCheckoutForm>
      <Typography.Header3>Total: ${subTotal}</Typography.Header3>
    </StyledCheckout>
  );
}

export default Checkout;

const StyledCheckout = styled(Layout.Container)`
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 3rem;
    h2 {
      grid-column: 1/ 3;
      text-align: center;
    }

    h3 {
      grid-area: 2/2/2/3;
      align-self: end;
      padding: 2rem 0;
    }
  }
`;

const StyledCheckoutForm = styled(Typography.Form)`
  opacity: ${(props) => (props.billing ? '0.5' : '')};
  grid-area: ${(props) =>
    props.billing ? ' 2 / 2 / 3 / 3 ' : ' 2 / 1 / 3 / 2'};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (min-width: 992px) {
    margin: 0;
  }
  .half_input {
    gap: 1rem;
    .half {
      display: flex;
      flex-direction: column;
    }
  }
  .error {
    color: #c35a5a;
  }
`;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// redux state, selectors, actions
import { resetCheckout } from '../features/checkoutSlice';
import { fetchOrder } from '../features/ordersSlice';
// components
import Spinner from '../components/Spinner';
// styles
import styled from 'styled-components';
import * as Layout from '../styles/layout/page_layout_styles';
import * as Typography from '../styles/typography/typographyStyles';

function Receipt() {
  const purchaseId = useSelector((state) => state.checkout.purchaseId);

  const dispatch = useDispatch();
  const currentOrder = useSelector((state) => state.orders.currentOrder);
  const currentOrderStatus = useSelector((state) => state.orders.status);

  useEffect(() => {
    dispatch(fetchOrder({ orderId: purchaseId }));

    return () => {
      dispatch(resetCheckout());
    };
  }, [dispatch, purchaseId]);

  if (currentOrderStatus !== 'fulfilled') {
    return (
      <StyledSpinner>
        <Spinner />
      </StyledSpinner>
    );
  }
  const { info, orderItems } = currentOrder;

  return (
    <StyledReceipt>
      <Typography.Header2>
        Thank you for your purchase {info.name}!{' '}
      </Typography.Header2>

      <div className='receipt_wrapper'>
        <Typography.Header3> Order number: {info.id}</Typography.Header3>
        <div className='details'>
          <div className=''>
            <Typography.Header4>Ship To:</Typography.Header4>
            <div>
              <Typography.Paragraph>{info.name}</Typography.Paragraph>
              <Typography.Paragraph>{info.address}</Typography.Paragraph>
              <Typography.Paragraph>{info.addressNumber}</Typography.Paragraph>
              <Typography.Paragraph>{info.zipCode}</Typography.Paragraph>
              <Typography.Paragraph>{info.city}</Typography.Paragraph>
            </div>
          </div>
        </div>
        <div className='items'>
          <Typography.Header4>Items Purchased:</Typography.Header4>
          <ul>
            {orderItems?.map((item, i) => (
              <li key={i}>
                <Typography.Paragraph>
                  {item.name} x {item.quantity}
                </Typography.Paragraph>
              </li>
            ))}
          </ul>
        </div>
        <div className='back_home'>
          <Link to='/'>Back To Home</Link>
        </div>
      </div>
    </StyledReceipt>
  );
}

export default Receipt;
const StyledSpinner = styled.div`
  padding: 10rem;
  text-align: center;
`;

const StyledReceipt = styled(Layout.Container)`
  /* padding: 10rem; */

  .receipt_wrapper {
    margin-top: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 20px rgba(70, 70, 70, 0.1);
    padding: 1.5rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    h3 {
      flex: 100%;
    }
    h4 {
      margin-bottom: 2rem;
    }

    .back_home {
      margin-top: 2rem;
      flex: 100%;
      text-align: center;
      a {
        /* display: block; */
        padding: 1em;
        background: #dea5a5;
        text-decoration: none;
        color: black;
      }
    }
  }
`;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// redux state, selectors, actions
import { fetchUserOrders } from '../features/ordersSlice';
import { selectUserOrders } from '../features/ordersSlice';
// components
import UserPurchaseCard from './UserPurchaseCard';
import Spinner from './Spinner';

function UserPurchases() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const fetchOrderStatus = useSelector((state) => state.orders.status);
  const orders = useSelector(selectUserOrders);
  useEffect(() => {
    dispatch(fetchUserOrders({ id: currentUser.id }));
  }, [currentUser, dispatch]);

  if (fetchOrderStatus !== 'fulfilled') {
    return <Spinner />;
  }

  const ordersWithCollections = orders.map((order) => {
    const collectionsPurchased = [
      ...new Set(order.items.map((i) => i.collectionsId)),
    ];

    return {
      ...order,
      collectionsPurchased,
    };
  });

  return (
    <div className=''>
      {ordersWithCollections.map((order) => (
        <UserPurchaseCard order={order} key={order.id} />
      ))}
    </div>
  );
}

export default UserPurchases;

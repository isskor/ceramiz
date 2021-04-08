import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// redux state, selectors, actions
import { selectAllItems } from '../features/appSlice';
// components
import CollectionItemSmall from './CollectionItemSmall';
// styles
import styled from 'styled-components';
import * as Typography from '../styles/typography/typographyStyles';
import { Button } from '../styles/misc/misc_styles';

function UserPurchaseCard({ order }) {
  const collectionsItems = useSelector(selectAllItems);

  const [expand, setExpand] = useState(false);

  const findCollection = (id) => collectionsItems.find((col) => col.id === id);

  const findCollectionImage = (id) => {
    const collection = findCollection(id);
    return ` /assets/images/${collection?.imageUrl}.jpg`;
  };

  const collectionsWithQuantity = order.collectionsPurchased.map((co) => {
    const matchedOrderItems = order.items.filter(
      (item) => item.collectionsId === co
    );
    const matchedOrderItemsQuantity = matchedOrderItems.map((a) => a.quantity);
    const matchedOrderItemsMaxQuantity = Math.max(...matchedOrderItemsQuantity);
    const matchCollection = findCollection(co);

    const matchCollectionInitialQuantity = matchCollection.set.map(
      (c) => c.quantity
    );
    const matchCollectionInitialMaxQuantity = Math.max(
      ...matchCollectionInitialQuantity
    );

    const quantity =
      matchedOrderItemsMaxQuantity / matchCollectionInitialMaxQuantity;

    return { collectionsId: co, quantity };
  });

  return (
    <PurchaseCard className='card'>
      <div className='card_header'>
        <Typography.Header4>Order Id: {order.id}</Typography.Header4>
        <Typography.Header4>Total: ${order.subTotal}</Typography.Header4>
      </div>
      <div className='image_preview'>
        <Typography.Header5>Items</Typography.Header5>
        {order.collectionsPurchased.map((co, i) => {
          return i < 3 ? (
            <img src={findCollectionImage(co)} key={co} alt='' />
          ) : (
            ''
          );
        })}
      </div>
      <div className='info'>
        <Typography.Header5>Ship To</Typography.Header5>
        <Typography.Paragraph>{order.name}</Typography.Paragraph>
        <Typography.Paragraph>{order.address}</Typography.Paragraph>
        <Typography.Paragraph>{order.addressNumber}</Typography.Paragraph>
        <Typography.Paragraph>{order.zipCode}</Typography.Paragraph>
        <Typography.Paragraph>{order.city}</Typography.Paragraph>
      </div>
      <div className='more_details'>
        <Button onClick={() => setExpand(!expand)}>
          {expand ? 'Close' : 'Details'}
        </Button>
      </div>
      {expand && (
        <div className='items'>
          {collectionsWithQuantity.map((col) => (
            <li key={col.collectionsId}>
              <CollectionItemSmall
                item={findCollection(col.collectionsId)}
                quantity={col.quantity}
              />
            </li>
          ))}
        </div>
      )}
    </PurchaseCard>
  );
}

export default UserPurchaseCard;

const PurchaseCard = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid #b4b4b4;
  margin-bottom: 1rem;
  .card_header {
    flex: 100%;
    display: flex;
    justify-content: space-between;
  }

  .image_preview {
    display: flex;
    flex-wrap: wrap;

    h5 {
      flex: 100%;
    }
    img {
      width: 120px;
      height: 120px;
      object-fit: cover;
    }
  }

  .more_details {
    align-self: flex-end;
    button {
      padding: 0.5em 1em;
      background: #dea5a5;
      cursor: pointer;
      color: black;
    }
  }

  .items {
    padding-top: 1rem;
    flex: 100%;
    > li {
      margin: 1rem 0;
      list-style: none;
    }
  }
`;

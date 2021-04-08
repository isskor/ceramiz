import React from 'react';
// styles
import styled from 'styled-components';
import * as Typography from '../styles/typography/typographyStyles';

function CollectionItemSmall({ item, quantity }) {
  return (
    <StyledItem>
      <ImageContainer>
        <img src={`/assets/images/${item?.imageUrl}.jpg`} alt={item.name} />
      </ImageContainer>
      <CartItemDescription>
        <Typography.Header4>{item.name}</Typography.Header4>
        <ul>
          {item.set.map((set) => (
            <li key={set.productId}>
              <Typography.Paragraph>
                {set.name} x {set.quantity * (item.quantity || quantity)} (
                {set.quantity})
              </Typography.Paragraph>
            </li>
          ))}
        </ul>
      </CartItemDescription>
    </StyledItem>
  );
}

export default CollectionItemSmall;

const StyledItem = styled.div`
  display: flex;
  justify-self: start;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 576px) {
    flex-direction: row;
  }
`;
const ImageContainer = styled.div`
  flex: 25%;
  img {
    min-width: 100px;
    height: 100px;
    object-fit: cover;
    @media (min-width: 768px) {
      min-width: 150px;
      height: 150px;
    }
  }
`;

const CartItemDescription = styled.div`
  flex: 75%;

  ul {
    display: flex;
    padding-top: 1rem;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;

    p {
      font-size: 0.8rem;
      @media (min-width: 576px) {
        font-size: 1rem;
      }
    }
  }
`;

import React from 'react';
import styled from 'styled-components';

const SetQuantityList = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1.5rem;
  gap: 1rem;

  @media (min-width: 576px) {
    justify-content: start;
  }
  @media (min-width: 992px) {
    grid-area: 1/1/1/3;
    align-self: end;
    padding-left: 40%;
  }
`;

const QuantityCard = styled.div`
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.9);
  background: ${(props) => (props.id === props.active ? props.color : '')};
  cursor: pointer;
  p {
    color: ${(props) => (props.id !== props.active ? props.color : '')};
  }
  @media (min-width: 576px) {
    justify-content: start;
    width: 150px;
    padding: 2rem;
  }
  @media (min-width: 768px) {
    width: 120px;
    padding: 2rem;
  }
  @media (min-width: 992px) {
    width: 250px;
  }
`;

function ItemQuantityCard({ price, quantity, setQuantity, color }) {
  const quantities = [1, 5, 10];

  return (
    <SetQuantityList>
      {quantities.map((q) => (
        <QuantityCard
          key={q}
          id={q}
          active={quantity}
          color={color}
          onClick={() => setQuantity(q)}
        >
          <p className='set'>{q} Set</p>
          <p className='price'>$ {q * price} </p>
        </QuantityCard>
      ))}
    </SetQuantityList>
  );
}

export default ItemQuantityCard;

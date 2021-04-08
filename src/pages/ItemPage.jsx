import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// redux state, selectors, actions
import { selectCollection } from '../features/appSlice';
import { setCurrentItem } from '../features/itemSlice';

// components
import AddToCartBtn from '../components/AddToCartBtn';
import ItemQuantityCard from '../components/ItemQuantityCard';
import NextPrev from '../components/NextPrev';
import ProductNav from '../components/ProductNav';

// styles
import styled from 'styled-components';
import * as Typography from '../styles/typography/typographyStyles';
import { Image } from '../styles/misc/misc_styles';

function ItemPage() {
  const [quantity, setQuantity] = useState(5);
  const { collection, id } = useParams();

  const dispatch = useDispatch();

  const col = useSelector(selectCollection(collection));

  const product = col.items.find((item) => item.name === id);

  const index = col.items.findIndex((item) => item.name === id);

  useEffect(() => {
    dispatch(setCurrentItem({ index, col }));
  }, [index, col, dispatch]);

  return (
    <StyledContainer
      color={product.backgroundColor}
      secondaryColor={product.secondaryColor}
    >
      <div className='img_ctn'>
        <Image
          src={`/assets/images/${product.imageUrl}.jpg`}
          alt={product.name}
        />
      </div>
      <div className='text'>
        <ProductNav />
        <Typography.Paragraph>{product.collectionType}</Typography.Paragraph>
        <Typography.Header1>
          {product.name} <span className='dot'></span>
        </Typography.Header1>
        <Typography.Paragraph>{product.description}</Typography.Paragraph>
        <div className='includes'>
          <span>Set Includes</span>
          <ul>
            {product?.set?.map((item, i) => (
              <li key={item.productId}>
                <Typography.Paragraph>{item.quantity} x </Typography.Paragraph>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <AddToCartBtn product={product} quantity={quantity} />
      </div>
      <ItemQuantityCard
        price={product.price}
        quantity={quantity}
        setQuantity={setQuantity}
        color={product.secondaryColor}
      />
      <NextPrevItems>
        <NextPrev />
      </NextPrevItems>
    </StyledContainer>
  );
}

export default ItemPage;

const StyledContainer = styled.article`
  display: grid;
  background: ${(props) => props.color};

  .img_ctn {
    grid-area: 1/1/1/1;
    max-height: 50vh;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  h1 {
    color: white;
    font-size: 2.6rem;
    white-space: nowrap;
  }

  .text {
    padding: 1rem;
    color: white;
    .dot {
      width: 0.5em;
      height: 0.5em;
      border-radius: 999px;
      background: ${(props) => props.secondaryColor};
      display: inline-block;
    }
  }

  .includes {
    margin: 2rem 0;

    > span {
      border-bottom: 6px solid ${(props) => props.secondaryColor};
    }

    ul {
      margin-top: 1rem;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      li {
        flex: 40%;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 5rem 0;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 500px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr;
    padding: 0;
    .text {
      grid-area: 1/2/1/3;
      align-self: center;
      margin-top: -5rem;
    }
    .img_ctn {
      min-height: 100vh;
      height: 100vh;
    }
  }
`;

const NextPrevItems = styled.div`
  grid-area: 1/1/1/1;
  /* background: red; */
  width: 100%;
  align-self: center;
  display: flex;
  justify-content: space-between;
`;

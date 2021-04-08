import React from 'react';
import { useHistory } from 'react-router-dom';
// components
import AddToCartBtn from './AddToCartBtn';
// styles
import styled from 'styled-components';
import * as Typography from '../styles/typography/typographyStyles';
import { Image } from '../styles/misc/misc_styles';

function ProductItem({ product, i }) {
  const history = useHistory();
  const goToProduct = (e, product) => {
    if (e.target.tagName === 'BUTTON') return;
    history.push(history.location.pathname + '/' + product.name);
  };
  return (
    <StyledProductCard
      flex={i === 0 ? '100%' : ''}
      bg={product.backgroundColor}
      onClick={(e) => goToProduct(e, product)}
    >
      <div className='img_container'>
        <Image
          src={`/assets/images/${product.imageUrl}.jpg`}
          alt={product.name}
          loading='lazy'
        />
      </div>
      <div className='product_info'>
        <Typography.Header2>{product.name}</Typography.Header2>
        {/* <Typography.Paragraph>{product.description}</Typography.Paragraph> */}

        <AddToCartBtn product={product} />
      </div>
    </StyledProductCard>
  );
}

export default ProductItem;

const StyledProductCard = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  .img_container {
    flex: 50%;
    border-radius: 1.5rem 0 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    max-height: 350px;

    min-height: ${(props) => (props.flex ? '150px' : '100px')};
  }
  .product_info {
    flex: 20%;
    display: flex;
    flex-direction: column;
    background: ${(props) => props.bg};
    h2 {
      color: #eeeeee;
      padding: 2rem;
      text-align: center;
    }
  }

  @media (min-width: 576px) {
    flex-direction: ${(props) => (props.flex ? 'row' : '')};
    flex: ${(props) => (props.flex ? '100%' : '40%')};
    .product_info {
      flex: 50%;
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    .img_container {
      border-radius: 1.5rem 0 0 1.5rem;

      min-height: ${(props) => (props.flex ? '450px' : '350px')};
    }
  }
`;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// redux state, selectors, actions
import { addToCart } from '../features/cartSlice';
// styles
import styled from 'styled-components';
import { Button } from '../styles/misc/misc_styles';

function AddToCartBtn({ product, quantity }) {
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const handleClickStyling = () => setClick(!click);
  return (
    <StyledAddToCartButton
      onClick={() => dispatch(addToCart({ product, quantity }))}
      onMouseDown={handleClickStyling}
      onMouseUp={handleClickStyling}
      down={click}
    >
      Add To Cart
    </StyledAddToCartButton>
  );
}

export default AddToCartBtn;

const StyledAddToCartButton = styled(Button)`
  margin-top: auto;
  margin-bottom: 2rem;
  align-self: center;
  font-family: 'lato', sans-serif;
  background: #eeeeee;
  color: black;
  background: ${(props) => (props.down ? '#fdfdfd' : '')};
`;

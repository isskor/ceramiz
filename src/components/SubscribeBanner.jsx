import React from 'react';
// styles
import styled from 'styled-components';
import * as Layout from '../styles/layout/page_layout_styles';
import * as Typography from '../styles/typography/typographyStyles';
import { Button } from '../styles/misc/misc_styles';

function SubscribeBanner() {
  return (
    <Banner>
      <div className='text'>
        <Typography.Header2>Join Our Newsletter</Typography.Header2>
        <Typography.Paragraph>
          Subscribe to Ceramiz newsletter and be the first to preview our new
          collections, receive exclusive offers and discover stories behind our
          products
        </Typography.Paragraph>
      </div>
      <form action=''>
        <input type='text' placeholder='Enter your email' />
        <Button>Subsribe</Button>
      </form>
    </Banner>
  );
}

export default SubscribeBanner;

const Banner = styled(Layout.Wrapper)`
  background: #3b3b3b;
  color: #b8b8b8;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 2rem;
    .text {
      flex: 0.3;
    }
  }

  form {
    @media (min-width: 1200px) {
      flex: 0.3;
      display: flex;
      margin: 2rem 0;
      align-items: center;
    }
    input {
      padding: 0.7rem;
      font-size: 1rem;
      border: 1px solid gray;
      outline: none;
      background: transparent;
      color: white;
      @media (min-width: 1200px) {
        flex: 0.7;
        padding: 1rem;
      }
    }
    button {
      flex: 0.3;
      border-radius: 0;
      color: white;
    }
  }
`;

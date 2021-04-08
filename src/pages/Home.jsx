import React from 'react';
import { Link } from 'react-router-dom';
// components
import HomeInfo from '../components/HomeInfo';
// styles
import styled from 'styled-components';
import * as Layout from '../styles/layout/page_layout_styles';
import * as Typography from '../styles/typography/typographyStyles';
import { Button } from '../styles/misc/misc_styles';
// images
import homebackground from '../assets/images/home.jpg';

function Home() {
  return (
    <>
      <HomeContainer>
        <Typography.Header1>Premium Handcrafted Ceramics</Typography.Header1>

        <Typography.Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi maxime
          quisquam iusto iste delectus tenetur sed quasi porro eum aliquam,
          similique fugiat exercitationem illo sapiente nihil!
        </Typography.Paragraph>
        <div className='home_button--container'>
          <Link to='/collections'>
            <Button className='p'>Our Products</Button>
          </Link>
          <Link to='/about'>
            <Button className='r'>Read More</Button>
          </Link>
        </div>
      </HomeContainer>
      <HomeInfo />
    </>
  );
}

export default Home;

const HomeContainer = styled(Layout.Container)`
  background-image: url(${homebackground});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  h1 {
    width: 30%;
    padding-top: 30%;
    @media (min-width: 576px) {
      padding-top: 0rem;
    }
  }
  p {
    display: none;
    @media (min-width: 576px) {
      display: block;
      width: 40%;
    }
  }

  .home_button--container {
    margin-top: 8rem;
    display: flex;
    gap: 2rem;
    justify-content: center;

    @media (min-width: 576px) {
      justify-content: start;
      margin-top: 2rem;
    }

    .p {
      background: #c3a080;
    }
    .r {
      background: #dea5a5;
    }
  }
`;

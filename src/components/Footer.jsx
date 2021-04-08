import React from 'react';
import { Link } from 'react-router-dom';
// styling
import styled from 'styled-components';
// images
import location_image from '../assets/images/location.jpg';

function Footer() {
  return (
    <StyledFooter>
      <FooterRow>
        <FooterCol>
          <li className='header'>Shop</li>
          <li>
            <Link to='/collections/vases'>Vases</Link>
          </li>
          <li>
            <Link to='/collections/dishware'>DishWare</Link>
          </li>
          <li>
            <Link to='/collections/drinkware'>DrinkWare</Link>
          </li>
        </FooterCol>
        <FooterCol>
          <li className='header'>Information</li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
        </FooterCol>
        <FooterCol>
          <li className='header'>Contact</li>
          <li>contact@ceramiz.com</li>
          <li>+46 71 1337 137</li>
        </FooterCol>
        <FooterCol>
          <li className='header'>Location</li>
          <li>
            Visit us at <br /> 1337 Empire St, <br /> Malmo, Sweden
          </li>
        </FooterCol>
        <FooterImage>
          <img
            src={location_image}
            alt='ceramic shop with ceramic tools and hardware'
          />
        </FooterImage>
      </FooterRow>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  @media (min-width: 768px) {
    padding: 2rem;
  }
  @media (min-width: 1200px) {
    padding: 2rem 10rem;
  }
`;

const FooterRow = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem;
  justify-content: space-evenly;
`;

const FooterCol = styled.ul`
  flex: 40%;
  font-family: 'lato', sans-serif;

  .header {
    font-weight: 700;
    font-size: 1.2rem;
    color: black;
  }

  li {
    padding: 1rem 0;
    margin: 0 auto;
    color: #959595;
    a {
      color: #959595;
      text-decoration: none;

      &:hover {
        color: #666666;
      }
    }
  }
  @media (min-width: 768px) {
    flex: 0.2;
  }
  @media (min-width: 992px) {
    flex: 0.2;
  }
`;
const FooterImage = styled.div`
  /* flex: 100%; */
  display: none;
  @media (min-width: 992px) {
    display: block;
    flex: 0.2;
    justify-self: center;
    img {
      display: block;
      height: 200px;
      width: 100%;
      object-fit: cover;
      margin-top: 1rem;
    }
  }
`;

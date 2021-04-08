import React from 'react';
// styles
import styled from 'styled-components';
import * as Typography from '../styles/typography/typographyStyles';
// images
import about from '../assets/images/about.jpg';
import about_ceramic from '../assets/images/about_ceramic.jpg';
import about_ceramic2 from '../assets/images/about_ceramic2.jpg';

function OurStory() {
  return (
    <div>
      <section>
        <StyledArticle className=''>
          <img
            src={about}
            alt='A red ceramic vaze sitton ontop of two books and a ceramic red bird'
          />
          <h2>What started as an passion has grown to a solid craftmanship.</h2>
          <h3>
            Using natural raw materials, striking colors and bold shapes we
            create mood and atmosphere.
          </h3>
        </StyledArticle>
      </section>
      <StyledArticle2>
        <Typography.Paragraph className='text1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod est
          aspernatur, sit magni cum illo! Iure illo, ipsa ad sed eius cumque
          tempore commodi, distinctio magnam, vel quidem aliquam? Vel quaerat
          illo fugiat perspiciatis ut odit, culpa totam obcaecati voluptatem!
          Alias explicabo quis animi velit repellendus neque et hic aliquid!
        </Typography.Paragraph>
        <img
          className='image1'
          src={about_ceramic}
          alt='Person sculpting a ceramic bowl'
          loading='lazy'
        />
        <Typography.Paragraph className='text2'>
          Lorema ipsum dolor sit amet consectetur adipisicing elit. Quod est
          aspernatur, sit magni cum illo! Iure illo, ipsa ad sed eius cumque
          tempore commodi, distinctio magnam, vel quidem aliquam? Vel quaerat
          illo fugiat perspiciatis ut odit, culpa totam obcaecati voluptatem!
          Alias explicabo quis animi velit repellendus neque et hic aliquid!
        </Typography.Paragraph>
        <img
          className='image2'
          src={about_ceramic2}
          alt='Girl with black hair sculpting a ceramic piece'
          loading='lazy'
        />
      </StyledArticle2>
    </div>
  );
}

export default OurStory;

const StyledArticle = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  img {
    grid-area: 1/1/3/3;
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }

  h2,
  h3 {
    padding: 1rem;
  }

  h2 {
    grid-area: 1/1/1/2;
    align-self: center;
    justify-self: center;
    font-size: 2rem;
    color: #dea5a5;
    margin-top: 2rem;
  }
  h3 {
    color: #75666b;
    grid-area: 2/1/2/2;
  }
  @media (min-width: 576px) {
    h2,
    h3 {
      padding: 2rem 5rem;
    }
    h3 {
      grid-area: 1/1/3/3;
      align-self: center;
      width: 80%;
    }
  }
  @media (min-width: 992px) {
    h3 {
      grid-area: 2/2/2/2;
      align-self: start;
      justify-self: end;
    }
  }
`;

const StyledArticle2 = styled.article`
  display: grid;
  img {
    max-height: 600px;
    padding: 1rem;
  }

  .text1 {
    grid-area: 1/2/1/3;
  }
  .text2 {
    grid-area: 2/1/2/2;
    justify-self: end;
  }
  p {
    align-self: center;
    padding: 1rem;
    @media (min-width: 768px) {
      width: 60%;
    }
  }
  .image1 {
    grid-area: 1/1/1/1;
    justify-self: end;
  }
  .image2 {
    grid-area: 2/2/2/2;
  }
`;

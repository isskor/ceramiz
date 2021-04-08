import React from 'react';
// styles
import styled from 'styled-components';
import { Image } from '../styles/misc/misc_styles';
import * as Typography from '../styles/typography/typographyStyles';
// images
import homehero from '../assets/images/homehero.jpg';
import ceramic from '../assets/images/ceramic.jpg';
import ceramic2 from '../assets/images/ceramic2.jpg';

function HomeInfo() {
  return (
    <InfoLayout>
      <Image src={homehero} alt='' className='img1' loading='lazy' />
      <article className='t1'>
        <Typography.Header2>Hello World</Typography.Header2>
        <Typography.Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          alias accusantium rem nulla minus suscipit recusandae excepturi id,
          totam labore repellendus quibusdam eaque soluta quidem sequi maxime
          facilis dolor, vel dolorum veritatis amet aperiam fugiat tempora.
          Suscipit odio porro exercitationem?
        </Typography.Paragraph>
      </article>

      <Image src={ceramic2} alt='' className='img2' loading='lazy' />
      <Image src={ceramic} alt='' className='img3' loading='lazy' />

      <article className='t2'>
        <Typography.Header2>Hello World</Typography.Header2>
        <Typography.Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem modi
          voluptates vel eius at ea laudantium dicta repudiandae iste. Molestias
          sequi ducimus esse at possimus amet saepe fugiat placeat vel!
        </Typography.Paragraph>
      </article>
    </InfoLayout>
  );
}

export default HomeInfo;

const InfoLayout = styled.section`
  display: grid;
  grid-template-rows: repeat(12, 100px);
  padding-bottom: 5rem;
  .t1 {
    grid-area: 1/1/4/13;
    margin: 2rem;
  }
  .img1 {
    grid-area: 1/1/6/13;
  }
  .img2 {
    grid-area: 6/1/12/6;
    opacity: 0.6;
    z-index: -1;
  }
  .img3 {
    grid-area: 11/3/13/11;
  }
  .t2 {
    grid-area: 7/6/12/13;
    margin: 0 0.5rem;
    @media (min-width: 576px) {
      grid-area: 7/5/12/13;
    }
  }

  @media (min-width: 768px) {
    padding: 5rem;
    .t1 {
      grid-area: 1/2/4/7;
    }
    .img1 {
      grid-area: 1/8/6/13;
    }
    .img2 {
      grid-area: 6/1/12/5;
    }
    .img3 {
      grid-area: 10/3/13/7;
    }
    .t2 {
      grid-area: 8/8/12/13;
    }
  }
  @media (min-width: 992px) {
    padding: 10rem;
  }
  @media (min-width: 1200px) {
    padding: 15rem;
  }
`;

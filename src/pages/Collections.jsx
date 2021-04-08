import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
// redux state, selectors, actions
import { selectCollections } from '../features/appSlice';
// styles
import styled from 'styled-components';
import * as Layout from '../styles/layout/page_layout_styles';
import * as Typography from '../styles/typography/typographyStyles';
import { Image } from '../styles/misc/misc_styles';

const CollectionsLayout = styled(Layout.Container)`
  h1 {
    text-align: center;
  }

  p {
    /* width: 60%; */
    text-align: center;
    line-height: 2rem;
    font-size: 1.2rem;
    margin: 1rem auto 5rem;
    color: #c3a080;
    .p {
      background: #c3a080;
    }
    .r {
      background: #dea5a5;
    }
  }
`;

const StyledCollections = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 60px);
  gap: 1rem;
  @media (min-width: 1400px) {
    padding: 5rem 10rem;
  }
`;

const StyledCollection = styled(Link)`
  border-radius: 0.25rem;
  overflow: hidden;
  display: grid;
  box-shadow: 0 4px 50px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  grid-area: ${(props) => {
    if (props.position === 1) return '1/2/4/12';
    if (props.position === 2) return '4/2/7/12';
    if (props.position === 3) return '7/2/10/12';
  }};
  @media (min-width: 768px) {
    grid-area: ${(props) => {
      if (props.position === 1) return '1/1/12/6';
      if (props.position === 2) return '2/6/7/12';
      if (props.position === 3) return '7/7/12/13';
    }};
  }

  img {
    grid-area: 1/1/1/1;
  }

  h3 {
    grid-area: 1/1/1/1;
    justify-self: end;

    padding: 1rem;
    color: white;
    align-self: start;
    background: linear-gradient(
      to bottom left,
      rgba(0, 0, 0, 0.15),
      transparent
    );
    border-radius: 0 0 0 1rem;
  }
`;

function Collections() {
  const history = useHistory();
  const { pathname } = history.location;
  const collections = useSelector(selectCollections);

  return (
    <CollectionsLayout>
      <Typography.Header1>Collections 2021</Typography.Header1>
      <Typography.Paragraph>
        Our ambition is to design the highest quality products with ecological
        consciousness and sustainability in mind. We are sure that you will find
        inspiration for your space on our pages.
      </Typography.Paragraph>
      <StyledCollections>
        {collections.map((co, idx) => (
          <StyledCollection
            key={co.id}
            position={idx + 1}
            to={pathname + '/' + co.path}
          >
            <Image src={`/assets/images/${co.imageUrl}.jpg`} alt={co.name} />
            <Typography.Header3>{co.name} Collection</Typography.Header3>
          </StyledCollection>
        ))}
      </StyledCollections>
    </CollectionsLayout>
  );
}

export default Collections;

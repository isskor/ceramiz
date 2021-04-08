import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// redux state, selectors, actions
import { selectCollection } from '../features/appSlice';
// components
import ProductItem from '../components/ProductItem';
import ProductNav from '../components/ProductNav';
// styles
import styled from 'styled-components';
import * as Layout from '../styles/layout/page_layout_styles';
import * as Typography from '../styles/typography/typographyStyles';
import { Image } from '../styles/misc/misc_styles';

function ProductPage() {
  const { collection } = useParams();

  const collectionList = useSelector(selectCollection(collection));

  return (
    <CollectionPage>
      <StyledHeader>
        <ProductNav />
        <div className='imgctn'>
          <Image
            src={`/assets/images/${collectionList.imageUrl}.jpg`}
            alt={collectionList.name}
          />
        </div>
        <StyledHeaderText>
          <Typography.Header2>
            {collectionList.name} Collection
          </Typography.Header2>
          <Typography.Paragraph>
            {collectionList.description}
          </Typography.Paragraph>
          <Typography.Paragraph>
            {collectionList.alt_description}
          </Typography.Paragraph>
        </StyledHeaderText>
      </StyledHeader>
      <StyledListContainer>
        {collectionList?.items?.map((product, i) => (
          <ProductItem i={i} product={product} key={i} />
        ))}
      </StyledListContainer>
    </CollectionPage>
  );
}

export default ProductPage;

const StyledHeader = styled(Layout.FlexContainer)`
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  gap: 5rem;
  .imgctn {
    flex: 0.5;
    img {
      height: 400px;
    }
  }
`;
const StyledHeaderText = styled.div`
  flex: 0.5;
`;

const StyledListContainer = styled(Layout.Wrapper)`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
`;

const CollectionPage = styled.section`
  margin-bottom: 6rem;
`;

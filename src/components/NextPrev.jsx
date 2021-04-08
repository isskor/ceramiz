import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
// redux state, selectors, actions
import {
  selectCurrentCollection,
  selectNextItem,
  selectPrevItem,
} from '../features/itemSlice';
// components
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
// styles
import styled from 'styled-components';
import * as Typography from '../styles/typography/typographyStyles';
import { Image } from '../styles/misc/misc_styles';

function NextPrev() {
  useEffect(() => {});
  const [preview, showPreview] = useState(false);
  const history = useHistory();
  const nextItem = useSelector(selectNextItem);
  const prevItem = useSelector(selectPrevItem);
  const collection = useSelector(selectCurrentCollection);

  const goToNextPrev = (item) => {
    history.push('/collections/' + collection + '/' + item.name);
  };

  return (
    <>
      <>
        <NextPrevBtn
          onClick={() => goToNextPrev(prevItem)}
          onMouseOver={() => showPreview(true)}
          onMouseLeave={() => showPreview(false)}
        >
          <ArrowLeft />

          {preview && (
            <PreviewCard>
              <img src={`/assets/images/${prevItem.imageUrl}.jpg`} alt='' />
              <Typography.Paragraph>{prevItem.name}</Typography.Paragraph>
            </PreviewCard>
          )}
        </NextPrevBtn>
        <NextPrevBtn
          onClick={() => goToNextPrev(nextItem)}
          onMouseOver={() => showPreview(true)}
          onMouseLeave={() => showPreview(false)}
        >
          <ArrowRight />
          {preview && (
            <PreviewCard next>
              <Image
                src={`/assets/images/${nextItem.imageUrl}.jpg`}
                alt={nextItem.name}
              />
              <p>{nextItem.name}</p>
            </PreviewCard>
          )}
        </NextPrevBtn>
      </>
    </>
  );
}

export default NextPrev;

const NextPrevBtn = styled.div`
  position: relative;
`;
const PreviewCard = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.3);
  opacity: 0.8;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 150px;
  cursor: pointer;
  top: 0;

  right: ${(props) => (props.next ? ' 0px' : '')};
  display: none;

  img {
    max-height: 120px;
  }
  p {
    text-align: center;
  }
`;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// redux state, selectors, actions
import { selectCollections } from '../features/appSlice';
// stylers
import styled from 'styled-components';

function CollectionDropdown({
  openCollection,
  setOpenCollection,
  collectionRef,
}) {
  const collections = useSelector(selectCollections);
  const [collectionPreview, setCollectionPreview] = useState({});

  return (
    <>
      {openCollection && (
        <CollectionNav ref={collectionRef}>
          <div className='text'>
            <h3>{collectionPreview.name}</h3>
            <p>{collectionPreview.alt_description}</p>
          </div>
          <ul>
            {Object.values(collections).map((co) => (
              <li
                key={co.id}
                onClick={() => setOpenCollection(false)}
                onMouseOver={() => setCollectionPreview(co)}
              >
                <Link to={`/collections/${co.path}`}>
                  <img
                    src={`/assets/images/${co.imageUrl}.jpg`}
                    alt={co.name}
                  />
                  <span>{co.name} </span>
                </Link>
              </li>
            ))}
          </ul>
        </CollectionNav>
      )}
    </>
  );
}

export default CollectionDropdown;

const CollectionNav = styled.nav`
  background: white;
  width: 100%;
  top: 0;
  margin-top: 102px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  border-top: 1px solid gray;
  animation: fadeDown 0.3s ease forwards;
  position: absolute;
  left: 0;

  @keyframes fadeDown {
    from {
      margin-top: 5rem;
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .text {
    flex: 0.3;
    border-right: 1px solid gray;
    color: gray;
    font-family: 'lato', sans-serif;
    padding: 1rem;
    h3 {
      padding-bottom: 1rem;
    }
  }
  ul {
    display: flex;
    gap: 1rem;

    li {
      a {
        display: grid;
        text-decoration: none;
        border-radius: 8px;
        overflow: hidden;
        margin: 0;
        span {
          grid-area: 1/1/1/1;
          align-self: end;
          text-align: center;
          background: linear-gradient(
            to top,
            rgba(255, 255, 255, 0.9),
            transparent
          );

          font-family: 'lato', sans-serif;
          color: #585858;
        }
      }
    }
  }

  img {
    grid-area: 1/1/1/1;
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
`;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// redux state, selectors, actions
import {
  selectCurrentUser,
  updateUser,
  draftUserStatusSelector,
  draftUserErrorSelector,
  setUserStatusIdle,
} from '../features/userSlice';
// components
import Spinner from './Spinner';
// styles
import styled from 'styled-components';
import * as Typography from '../styles/typography/typographyStyles';
import { Button } from '../styles/misc/misc_styles';

function UserInfo() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({});
  const [error, setError] = useState('');

  const updateError = useSelector(draftUserErrorSelector);
  //   const status = useSelector(selectUserStatus);
  const status = useSelector(draftUserStatusSelector);

  function handleChange(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }
  useEffect(() => {
    setError('');
    if (currentUser) {
      setUserInfo((userInfo) => ({
        ...userInfo,
        name: currentUser.name,
        email: currentUser.email,
        address: currentUser.address,
        addressNumber: currentUser.addressNumber,
        zipCode: currentUser.zipCode,
        city: currentUser.city,
      }));
    }
    if (updateError) setError(updateError);
  }, [currentUser, updateError]);

  useEffect(() => {
    return () => {
      dispatch(setUserStatusIdle());
    };
  }, [dispatch]);

  const handleUpdate = (e) => {
    e.preventDefault();

    dispatch(updateUser({ id: currentUser.id, userInfo }));
  };

  return (
    <StyledForm onChange={handleChange} onSubmit={handleUpdate}>
      <Typography.Header2>My Information</Typography.Header2>

      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        value={userInfo.name || ''}
        onChange={handleChange}
      />

      <label htmlFor='email'>Email</label>
      <input
        type='text'
        name='email'
        value={userInfo.email || ''}
        onChange={handleChange}
      />
      <label htmlFor='address'>Address Street</label>
      <input
        type='text'
        name='address'
        value={userInfo.address || ''}
        onChange={handleChange}
      />
      <label htmlFor='addressNumber'>Address Number</label>
      <input
        type='text'
        name='addressNumber'
        value={userInfo.addressNumber || ''}
        onChange={handleChange}
      />
      <label htmlFor='zipCode'>Zip code</label>
      <input
        type='text'
        name='zipCode'
        value={userInfo.zipCode || ''}
        onChange={handleChange}
      />
      <label htmlFor='city'>City</label>
      <input
        type='text'
        name='city'
        value={userInfo.city || ''}
        onChange={handleChange}
      />
      {error && (
        <Typography.Paragraph className='error'>{error}</Typography.Paragraph>
      )}
      {status === 'pending' ? (
        <StyledSpinner className=''>
          <Spinner />
        </StyledSpinner>
      ) : (
        <Button type='submit'>Submit</Button>
      )}
      {status === 'updated' && <p>Update Succesful!</p>}
    </StyledForm>
  );
}

export default UserInfo;

const StyledSpinner = styled.div`
  text-align: center;
  margin: 2rem;
`;

const StyledForm = styled(Typography.Form)`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  p {
    color: #63a063;
    text-align: center;
  }

  max-width: 600px;
`;

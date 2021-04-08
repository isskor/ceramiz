import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
// redux state, selectors, actions
import {
  draftUserStatusSelector,
  fetchUser,
  draftUserErrorSelector,
} from '../features/userSlice';
// components
import Spinner from './Spinner';
// styles
import styled from 'styled-components';
import * as Layout from '../styles/typography/typographyStyles';
import { Button } from '../styles/misc/misc_styles';

function LoginForm() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const userStatus = useSelector(draftUserStatusSelector);
  const userError = useSelector(draftUserErrorSelector);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError('');
    if (userStatus === 'pending') setLoading(true);
    if (userStatus === 'failed') setLoading(false);
    if (userStatus === 'fulfilled') {
      history.push('/');
    }
    if (userError) {
      setError(userError);
    }
  }, [userError, userStatus, history]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(fetchUser(loginInfo));
  };

  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
    setError('');
  };

  return (
    <LoginCtn onChange={handleChange} onSubmit={handleLogin}>
      <h1>Login</h1>
      <h3>Email</h3>
      <input type='text' name='email' />
      <h3>Password</h3>
      <input type='password' name='password' />
      {error && <p>{error}</p>}
      <Button type='submit'>Login</Button>
      {loading && <Spinner />}
      <Link to='/register'>Don't have an Account? Register</Link>
    </LoginCtn>
  );
}

export default LoginForm;

export const LoginCtn = styled(Layout.Form)`
  display: flex;
  flex-direction: column;

  & > * {
    margin: 1rem;
  }
  @media (min-width: 992px) {
    margin: 5rem;
  }
  @media (min-width: 1200px) {
    margin: 5rem 10rem;
  }
`;

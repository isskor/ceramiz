import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

// redux state, selectors, actions
import { createUser } from '../features/userSlice';
// components
import Spinner from './Spinner';
import { LoginCtn } from './LoginForm';
// styles
import { Button } from '../styles/misc/misc_styles';

function RegisterForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [regInfo, setRegInfo] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  const userStatus = useSelector((state) => state.user.status);
  const userError = useSelector((state) => state.user.error);

  useEffect(() => {
    setError('');
    if (userStatus === 'pending') setLoading(true);
    if (userStatus === 'failed') setLoading(false);
    if (userStatus === 'registered') {
      history.push('/login');
    }
    if (userError) {
      setError(userError);
    }
  }, [userError, userStatus, history]);

  const register = (e) => {
    e.preventDefault();
    dispatch(createUser(regInfo));
  };

  const handleChange = (e) => {
    setRegInfo({ ...regInfo, [e.target.name]: e.target.value });
  };

  return (
    <LoginCtn onSubmit={register} onChange={handleChange}>
      <h1>Register</h1>
      <h3>Name</h3>
      <input type='text' name='name' />
      <h3>Email</h3>
      <input type='text' name='email' />
      <h3>Password</h3>
      <input type='password' name='password' />
      {error && <p>{error}</p>}
      {loading ? <Spinner /> : <Button type='submit'>Register</Button>}
      <Link to='/login'>Already have an Account? Login</Link>
    </LoginCtn>
  );
}

export default RegisterForm;

import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
// redux state, selectors, actions
import { userLogout } from '../features/userSlice';
// styles
import { Button } from '../styles/misc/misc_styles';

function LogoutBtn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch(userLogout());
    history.push('/');
  };

  return <Button onClick={handleLogout}>Logout</Button>;
}

export default LogoutBtn;

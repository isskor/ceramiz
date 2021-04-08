import styled from 'styled-components';
// components
import LoginForm from '../components/LoginForm';
// images
import login_img from '../assets/images/login.jpg';
function Login() {
  return (
    <LoginLayout>
      <LoginForm />
      <img src={login_img} alt='' />
    </LoginLayout>
  );
}

export default Login;
export const LoginLayout = styled.section`
  display: grid;
  padding: 5rem 0;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
  form {
    grid-area: 1/1/1/1;
  }

  img {
    display: none;

    @media (min-width: 576px) {
      display: block;
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }
`;

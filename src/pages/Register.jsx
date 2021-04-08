import styled from 'styled-components';
// styles
import { LoginLayout } from './Login';
// components
import RegisterForm from '../components/RegisterForm';
// images
import register_img from '../assets/images/register_img.jpg';

function Register() {
  return (
    <RegisterLayout>
      <img src={register_img} alt='' />
      <RegisterForm />
    </RegisterLayout>
  );
}

export default Register;
const RegisterLayout = styled(LoginLayout)`
  @media (min-width: 576px) {
    form {
      grid-area: 1/2/1/3;
    }
    img {
      grid-area: 1/1/1/2;
    }
  }
`;

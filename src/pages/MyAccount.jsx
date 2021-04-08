import { Route } from 'react-router-dom';
// components
import LogoutBtn from '../components/LogoutBtn';
import UserInfo from '../components/UserInfo';
import UserPurchases from '../components/UserPurchases';
// styles
import styled from 'styled-components';
import * as Layout from '../styles/layout/page_layout_styles';
import * as Typography from '../styles/typography/typographyStyles';

function MyAccount() {
  return (
    <StyledMyPage>
      <MyPageNav>
        <ul>
          <li>
            <Typography.Links to='/purchases'>My Purchases</Typography.Links>
          </li>
          <li>
            <Typography.Links to='/settings'>My Settings</Typography.Links>
          </li>
          <li className='logout'>
            <LogoutBtn />
          </li>
        </ul>
      </MyPageNav>

      <MyPageContent>
        <Route path='/purchases'>
          <UserPurchases />
        </Route>
        <Route path='/settings'>
          <UserInfo />
        </Route>
      </MyPageContent>
    </StyledMyPage>
  );
}

export default MyAccount;

const StyledMyPage = styled(Layout.Container)`
  /* padding: 12rem; */
  /* display: flex; */
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;
const MyPageNav = styled.nav`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;

    a {
      padding: 1rem;
      text-align: center;
      border-bottom: 1px solid gray;
    }
    .logout {
      margin: 2rem 1rem;
      flex: 100%;
      text-align: end;
    }
  }
  @media (min-width: 768px) {
    flex: 0.25;
    ul {
      height: 100%;
      justify-content: start;
      flex-direction: column;

      a {
        margin: 0 1rem;
      }

      flex-direction: column;
      border-right: 1px solid gray;
      .logout {
        flex: auto;
        display: flex;
        justify-content: flex-end;
        button {
          margin-top: auto;
        }
      }
    }
  }
`;
const MyPageContent = styled.div`
  @media (min-width: 768px) {
    flex: 0.75;
  }
`;

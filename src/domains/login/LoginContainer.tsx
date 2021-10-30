import React from 'react';

import styled from 'styled-components';

import Login from './Login';

import { postLogin } from '../../services/api';
import { saveItem } from '../../services/storage';
import { AuthenticationKey } from '../../services/serviceKey';

const LoginSection = styled.section`
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

type AdminUser = {
  userId: string;
  password: string;
}

function LoginContainer({
  setAuthentication,
}: any) {
  const login = async (adminUser: AdminUser) => {
    const authentication = await postLogin(adminUser);
    saveItem(AuthenticationKey, authentication);
    setAuthentication(authentication);
  };

  return (
    <LoginSection>
      <Login onClick={login} />
    </LoginSection>
  );
}

export default LoginContainer;

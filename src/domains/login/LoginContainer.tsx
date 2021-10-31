import React from 'react';

import styled from '@emotion/styled';

import Login from './Login';

import { postLogin } from '../../services/api';
import { saveItem } from '../../services/storage';
import { AuthenticationKey } from '../../services/serviceKey';

const LoginSection = styled.main`
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
    if (authentication) {
      saveItem(AuthenticationKey, JSON.stringify(authentication));
      setAuthentication(authentication);
    }
  };

  return (
    <LoginSection>
      <Login onClick={login} />
    </LoginSection>
  );
}

export default LoginContainer;

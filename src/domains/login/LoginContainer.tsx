import React from 'react';

import Login from './Login';

import { postLogin } from '../../services/api';
import { saveItem } from '../../services/storage';
import { AuthenticationKey } from '../../services/serviceKey';

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
    <article>
      <Login onClick={login} />
    </article>
  );
}

export default LoginContainer;

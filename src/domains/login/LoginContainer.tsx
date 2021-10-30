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
    console.log('[LOGIN SUCCESS]', authentication);
  };

  return (
    <section>
      <Login onClick={login} />
    </section>
  );
}

export default LoginContainer;

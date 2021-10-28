import React from 'react';

import Login from './Login';

import { postLogin } from '../../services/api';
import { saveItem } from '../../services/storage';

type AdminUser = {
  userId: string;
  password: string;
}

function LoginContainer() {
  const login = async (adminUser: AdminUser) => {
    const { token, username, email }: any = await postLogin(adminUser);
    saveItem('accessToken', token);
    console.log('[LOGIN SUCCESS]', username, email, token);
  };

  return (
    <section>
      <Login onClick={login} />
    </section>
  );
}

export default LoginContainer;

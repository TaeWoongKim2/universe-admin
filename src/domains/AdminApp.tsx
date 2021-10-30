import React, { useState } from 'react';

import Header from './layout/Header';
import Contents from './layout/Contents';

import { loadItem } from '../services/storage';
import { AuthenticationKey } from '../services/serviceKey';

function AdminApp() {
  const [user, setUser] = useState(loadItem(AuthenticationKey));
  const authenticated = user != null;

  return (
    <>
      <Header
        authenticated={authenticated}
      />
      <Contents
        authenticated={authenticated}
        onAuth={setUser}
      />
    </>
  );
}

export default AdminApp;

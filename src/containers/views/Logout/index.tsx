import React, { useEffect } from 'react';

import { removeItem } from '@services/storage';
import { AuthenticationKey } from '@services/serviceKey';

export default ({ setAuth }: any) => {
  const handleLogout = () => {
    removeItem(AuthenticationKey);
    setAuth(null);
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return <>로그아웃 진행중입니다...</>;
};

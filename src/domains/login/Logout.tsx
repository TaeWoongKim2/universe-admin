import React, { useEffect } from 'react';

import { loadItem, removeItem } from '../../services/storage';
import { AuthenticationKey } from '../../services/serviceKey';

const Logout = ({
  removeAuthentication,
}: any) => {
  // 관리자 인증토큰 유무를 확인합니다.
  useEffect(() => {
    const token = loadItem(AuthenticationKey);
    if (!token) {
      return;
    }

    removeItem(AuthenticationKey);
    removeAuthentication(null);
  });

  return (
    <>
      로그아웃 진행중입니다...
    </>
  );
};

export default Logout;

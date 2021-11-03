import React, { useState, useEffect } from 'react';

import { getUsers } from '@services/api';
import { loadItem } from '@services/storage';
import { AuthenticationKey } from '@services/serviceKey';

import Users from '@views/Admin/User/component/Users';

function UserContainer() {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);

  const authentication = loadItem(AuthenticationKey) || '{}';
  const loginUser = JSON.parse(authentication);

  async function fetchUsers() {
    const fetchedUserData = await getUsers({
      token: loginUser?.token,
    });
    return fetchedUserData;
  }

  useEffect(() => {
    const getUserData = async () => {
      setIsError(false);
      try {
        const userData = await fetchUsers();
        setUsers(userData);
      } catch (error) {
        setIsError(true);
      }
    };
    getUserData();
  }, []);

  return (
    <>
      관리자가 할 수 있는 모든 메뉴를 보여주거나, 주요 메뉴를 보여줍니다.
      {isError ? (
        <div>Something went wrong!</div>
      ) : (
        <>
          <Users users={users} />
        </>
      )}
    </>
  );
}

export default UserContainer;

import React, { useState } from 'react';

import { getUsers, validUser } from '@services/api';
import { loadItem } from '@services/storage';
import { AuthenticationKey } from '@services/serviceKey';

import UserDataTable from '@views/Admin/User/component/UserDataTable';

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

  const reloadUserData = async () => {
    try {
      const userData = await fetchUsers();
      setUsers(userData);
    } catch (error) {
      setIsError(true);
    }
  };

  const verifyUser = async (id: Number) => {
    try {
      const isOk = await validUser({
        token: loginUser?.token,
        id,
      });
      if (!isOk) {
        throw new Error('Error in communication, failed valid user!');
      }

      const updatedUsers: any = users.map((user: any) => {
        if (user.id !== id) {
          return user;
        }
        return {
          ...user,
          verified: true,
        };
      });
      setUsers(updatedUsers);
    } catch (error) {
      alert('해당 사용자 승인이 정상적으로 이뤄지지 않았습니다!');
    }
  };

  return (
    <>
      {isError ? (
        <div>Something went wrong!</div>
      ) : (
        <>
          <UserDataTable
            data={users}
            onReload={reloadUserData}
            onVerify={verifyUser}
          />
        </>
      )}
    </>
  );
}

export default UserContainer;

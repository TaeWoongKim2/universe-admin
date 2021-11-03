import React, { useState } from 'react';

import { getUsers } from '@services/api';
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

  return (
    <>
      {isError ? (
        <div>Something went wrong!</div>
      ) : (
        <>
          <UserDataTable data={users} onReload={reloadUserData} />
        </>
      )}
    </>
  );
}

export default UserContainer;

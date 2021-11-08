import React, { useState } from 'react';

import { getUsers, validUser } from '@services/api';
import { loadItem } from '@services/storage';
import { AuthenticationKey } from '@services/serviceKey';

import UserDataTable from '@views/Admin/User/component/UserDataTable';
import UserIdCardModal from '@views/Admin/User/component/UserIdCardModal';

function UserContainer() {
  const [isError, setIsError] = useState(false);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      setStudents(userData);
    } catch (error) {
      setIsError(true);
    }
  };

  const handleCheckStudentIdCard = async (student: any) => {
    console.log('>>>>>', student);
    setSelectedStudent(student);
    handleOpen();
  };

  const handleVerifyStudentIdCard = async (id: Number) => {
    try {
      const isOk = await validUser({
        token: loginUser?.token,
        id,
      });
      if (!isOk) {
        throw new Error('Error in communication, failed valid user!');
      }

      const updatedUsers: any = students.map((user: any) => {
        if (user.id !== id) {
          return user;
        }
        return {
          ...user,
          verified: true,
        };
      });
      setStudents(updatedUsers);
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
            data={students}
            onReload={reloadUserData}
            onIdentify={handleCheckStudentIdCard}
            onVerify={handleVerifyStudentIdCard}
          />
          <UserIdCardModal
            student={selectedStudent}
            visible={open}
            onClose={handleClose}
          />
        </>
      )}
    </>
  );
}

export default UserContainer;

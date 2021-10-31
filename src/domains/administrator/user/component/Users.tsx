import React from 'react';

import User from './User';

type UsersType = {
  users: Array<UserType>,
}

interface UserType {
  id: number;
  nickname: string;
  age: string;
  mbti: string;
  universeName: string;
  universeCertiImg: string;
  major: string;
  introduce: string;
  userImages: string;
  verified: boolean;
  deleteYn: string;
}

function Users({
  users,
}: UsersType) {
  return (
    <>
      {users.map((user: UserType) => {
        console.log(user);
        return (
          <User
            key={user.nickname}
            user={user}
          />
        );
      })}
    </>
  );
}

export default Users;

import React from 'react';

type UserType = {
  user: UserInterface;
};

interface UserInterface {
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

function User({ user }: UserType) {
  return <p>{`나는 ${user.nickname} 이라는 사용자 입니다.`}</p>;
}

export default User;

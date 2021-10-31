import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// const loginForm = [
//   {
//     label: '아이디',
//     name: 'userId',
//   },
// ];

function Login({ onClick }: any) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeUserId(event: React.ChangeEvent<HTMLInputElement>) {
    const { target: { value } } = event;
    setUserId(value);
  }

  function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    const { target: { value } } = event;
    setPassword(value);
  }

  function handleClick() {
    onClick({ userId, password });
  }

  return (
    <>
      <Box>
        <TextField
          label="아이디"
          id="userId"
          name="userId"
          value={userId}
          onChange={() => handleChangeUserId}
        />
        {/* <label htmlFor="login-userId">
          아이디
        </label>
        <input
          type="userId"
          id="login-userId"
          name="userId"
          value={userId}
          placeholder="아이디"
          onChange={handleChangeUserId}
        /> */}
      </Box>
      <div>
        <label htmlFor="login-password">
          비밀번호
        </label>
        <input
          type="password"
          id="login-password"
          name="password"
          value={password}
          placeholder="비밀번호"
          onChange={handleChangePassword}
        />
      </div>
      <button
        type="button"
        onClick={handleClick}
      >
        로그인
      </button>
    </>
  );
}

export default Login;

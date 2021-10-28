import React, { useState } from 'react';

const Login = ({
  onClick,
}: any) => {
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
    <section>
      <div>
        <label htmlFor="login-userId">
          아이디
        </label>
        <input
          type="userId"
          id="login-userId"
          name="userId"
          value={userId}
          placeholder="아이디"
          onChange={handleChangeUserId}
        />
      </div>
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
    </section>
  );
};

export default Login;

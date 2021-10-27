import React from 'react';

function Login() {
  return (
    <section>
      <div>
        <label htmlFor="login-email">
          아이디
        </label>
        <input
          type="email"
          id="login-email"
          name="email"
          value=""
          placeholder="email"
          onChange={() => null}
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
          value=""
          placeholder="password"
          onChange={() => null}
        />
      </div>
      <button
        type="button"
        onClick={() => null}
      >
        로그인
      </button>
    </section>
  );
}

export default Login;

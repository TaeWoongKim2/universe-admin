import React, { useState, useEffect } from 'react';

import {
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';

import AdminMenu from './domains/administrator/AdminMenu';
import LoginContainer from './domains/login/LoginContainer';
import Logout from './domains/login/Logout';

import { loadItem } from './services/storage';
import { AuthenticationKey } from './services/serviceKey';

function App() {
  const [user, setUser] = useState(loadItem(AuthenticationKey));
  const authenticated = user != null;

  useEffect(() => {
    //
  }, [user]);

  return (
    <>
      <header>
        <h1>
          <Link to="/">Home</Link>
          {' '}
          {(authenticated
            ? <Link to="/logout">로그아웃</Link>
            : <Link to="/login">로그인</Link>
          )}
        </h1>
      </header>
      <section>
        <Switch>
          <Route exact path="/">
            {authenticated
              ? <AdminMenu />
              : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            {authenticated
              ? <Redirect to="/" />
              : <LoginContainer setAuthentication={setUser} />}

          </Route>
          <Route path="/logout">
            {authenticated
              ? <Logout removeAuthentication={setUser} />
              : <Redirect to="/login" />}
          </Route>
          {/* <Route path="/about" component={AboutPage} /> */}
        </Switch>
      </section>
    </>
  );
}

export default App;

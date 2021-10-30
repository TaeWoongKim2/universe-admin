import React from 'react';

import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import AdminSystem from '../administrator/AdminSystem';
import LoginContainer from '../login/LoginContainer';
import Logout from '../login/Logout';

type Auth = {
  authenticated: boolean;
  onAuth: Function
}

function Contents({
  authenticated,
  onAuth,
}: Auth) {
  return (
    <section>
      <Switch>
        <Route exact path="/login">
          {authenticated
            ? <Redirect to="/" />
            : <LoginContainer setAuthentication={onAuth} />}
        </Route>
        <Route exact path="/logout">
          {authenticated
            ? <Logout removeAuthentication={onAuth} />
            : <Redirect to="/login" />}
        </Route>
        <Route exact path="/">
          {authenticated
            ? <AdminSystem />
            : <Redirect to="/login" />}
        </Route>
      </Switch>
    </section>
  );
}

export default Contents;

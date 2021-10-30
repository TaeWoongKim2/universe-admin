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
  const authenticatedContents = [
    {
      name: 'logout',
      href: '/logout',
      component: <Logout removeAuthentication={onAuth} />,
    },
    {
      name: 'main',
      href: '/',
      component: <AdminSystem />,
    },
  ];

  return (
    <Switch>
      <Route exact path="/login">
        {authenticated
          ? <Redirect to="/" />
          : <LoginContainer setAuthentication={onAuth} />}
      </Route>
      {authenticatedContents.map((content) => (
        <Route
          key={content.name}
          path={content.href}
          exact
        >
          {authenticated
            ? content.component
            : <Redirect to="/login" />}
        </Route>
      ))}
    </Switch>
  );
}

export default Contents;

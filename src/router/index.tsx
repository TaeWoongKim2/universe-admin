import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// Layouts
import Dashboard from '@layouts/Dashboard';

// Login view
import Login from '@views/Login';
import Logout from '@views/Logout';

// Admin views
import Admin from '@views/Admin';
import User from '@views/Admin/User';

import { loadItem } from '@services/storage';
import { AuthenticationKey } from '@services/serviceKey';

export default () => {
  const [auth, setAuth] = useState(loadItem(AuthenticationKey));
  const authenticated = auth != null;

  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          {authenticated ? <Redirect to="/" /> : <Login setAuth={setAuth} />}
        </Route>

        <Route path="/:path?" exact>
          {authenticated ? (
            <Dashboard>
              <Switch>
                <Route path="/" exact component={Admin} />
                <Route path="/user" exact component={User} />
                <Route path="/logout" exact>
                  <Logout setAuth={setAuth} />
                </Route>
              </Switch>
            </Dashboard>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

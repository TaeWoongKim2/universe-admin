import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import AdminMenu from './domains/administrator/AdminMenu';
import Login from './domains/login/Login';

function App() {
  return (
    <>
      <header>
        <h1>
          <Link to="/">Home</Link>
          {' '}
          <Link to="/login">로그인</Link>
        </h1>
      </header>
      <section>
        <Switch>
          <Route exact path="/" component={AdminMenu} />
          <Route path="/login" component={Login} />
          {/* <Route path="/about" component={AboutPage} /> */}
        </Switch>
      </section>
    </>
  );
}

export default App;

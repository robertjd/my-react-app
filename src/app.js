import { MasterPage } from './pages';
import ReactStormpath, { Router, LoginRoute, LogoutRoute, AuthenticatedRoute } from 'react-stormpath';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

ReactStormpath.init();

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Route path='/' component={MasterPage}>
      <LoginRoute path='/login' component={LoginPage} />
    </Route>
  </Router>,
  document.getElementById('app-container')
);
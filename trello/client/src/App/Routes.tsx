import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'

import { createBrowserHistory } from 'history'
import Boards from '../Boards'

const history = createBrowserHistory()

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Redirect exact from="/" to="/boards" />
      <Route path="/boards" component={Boards} />
    </Switch>
  </Router>
);

export default Routes
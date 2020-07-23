import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repo from '../pages/Repo';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/repo" component={Repo} />
    </Switch>
  );
}

export default Routes;

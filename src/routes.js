import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import history from './services/history';

const routes = [
  { path: '/', component: Main }
];

const Routes = () => {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));

  return (
    <Router history={history}>
      <Switch>{routeComponents}</Switch>
    </Router>
  );
};

export default Routes;
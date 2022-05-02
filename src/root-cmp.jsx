import React from 'react';
// import { Switch, Route } from 'react-router';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes.js';

export function RootCmp() {
  return (
    <Router>
      <main className='main-container'>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact
              component={route.component}
              path={route.path}
            />
          ))}
        </Switch>
      </main>
    </Router>
  );
}

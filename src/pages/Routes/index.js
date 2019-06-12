import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from '../NotFound';
import Home from '../Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

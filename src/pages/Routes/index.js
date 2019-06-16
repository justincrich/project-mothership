import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { PAGE_PATHS } from 'services/constants';
import Route from './Route';
import Bucket from '../Bucket';
import Billing from '../Billing';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={PAGE_PATHS.BILLING} component={Billing} />
        <Route component={Bucket} />
      </Switch>
    </BrowserRouter>
  );
}

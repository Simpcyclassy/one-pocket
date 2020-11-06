import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import NoMatch from './NoMatch';
import history from '../../history';
import { PATHS } from '../constants';

import accounts from '../../accounts';
import app from '../../app';
import mononConnect from '../../monoLink'

const { ACCOUNTS, HOME  } = PATHS;
const { App } = app.components;

const Routes = () => (
    <Router history={history}>
        <ScrollToTop>
            <App>
                <Switch>
                    <Route
                        path={HOME}
                        exact
                        strict
                        component={mononConnect.components.MonoLink}
                    />
                    <Route
                        path={ACCOUNTS}
                        exact
                        strict
                        component={accounts.components.Accounts}
                    />
                    <Route component={NoMatch} />
                </Switch>
            </App>
        </ScrollToTop>
    </Router>
);

export default Routes;
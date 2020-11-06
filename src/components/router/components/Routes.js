import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
// import NoMatch from './NoMatch';
import history from '../../history';
import { PATHS } from '../constants';

import app from '../../app';
import accounts from '../../accounts';
import verifications from '../../verifications';
import mononConnect from '../../monoLink'

const { ACCOUNTS, VERIFICATIONS, MONOCONNECT  } = PATHS;
const { App } = app.components;
const Routes = () => (
    <Router history={history}>
        <ScrollToTop>
            <App>
                <Switch>
                    <Route
                        path={MONOCONNECT}
                        exact
                        strict
                        component={mononConnect.components.MonoLink}
                    />
                    <Route
                        path={VERIFICATIONS}
                        exact
                        strict
                        component={verifications.components.Verifications}
                    />
                    <Route
                        path={ACCOUNTS}
                        exact
                        strict
                        component={accounts.components.Accounts}
                    />
                    {/* <Route component={NoMatch} /> */}
                </Switch>
            </App>
        </ScrollToTop>
    </Router>
);

export default Routes;
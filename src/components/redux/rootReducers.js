import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '../history';
import verifications from '../verifications';
import monoLink from '../monoLink';
import accounts from '../accounts';

const { reducers: verificationsReducer } = verifications;
const { reducers: monoLinkReducer } = monoLink;
const { reducers: accountsReducer } = accounts;

const rootReducers = {
    verifications: verificationsReducer,
    monoConnect: monoLinkReducer,
    accounts: accountsReducer,  
    router: connectRouter(history),
};

export default combineReducers(rootReducers);

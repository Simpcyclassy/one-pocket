import { takeLatest, call, put } from 'redux-saga/effects';

import { ACCOUNT_REQUEST } from './actionTypes';
import { accountSuccess, accountFailure } from './actions';
import { accountService } from './services';


function* userAccount() {    
    try {
        const res = yield call(accountService);
        localStorage.setItem('account', JSON.stringify(res.account));

        if (res.account) {
            yield put(accountSuccess(res.account));

        } else {
            yield put(accountFailure(res.message));
        }
    } catch (error) {
        const res = yield call(accountService);
        switch (error.status) {
            case 401:
                yield put(accountFailure(res.message));
                break;
            default:
                break;
        }
    }
}

/**
 * @function
 * Watches for the {@link actionTypes.ACCOUNT_REQUEST ACCOUNT_REQUEST} action.
 * Triggers request to capture data from body
 *
 * @return {void}
 */

function* watchUserAccount() {
    yield call(userAccount);
}

export default function* actionWatcher() {
    yield takeLatest(ACCOUNT_REQUEST, watchUserAccount);
}

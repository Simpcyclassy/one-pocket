import { takeEvery, call, put } from 'redux-saga/effects';

import { ACCOUNT_REQUEST } from './actionTypes';
import { accountSuccess, accountFailure } from './actions';
import { accountService } from './services';


function* userAccount(code) {
    const res = yield call(accountService, code);
    console.log(res);
    
    try {
        if (res) {
            yield put(accountSuccess(res.account));
        } else {
            yield put(accountFailure(res.message));
        }
    } catch (error) {
        switch (error.status) {
            case 500:
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

function* watchUserAccount({ payload }) {
    yield call(userAccount, payload);
}

export default function* actionWatcher() {
    yield takeEvery(ACCOUNT_REQUEST, watchUserAccount);
}

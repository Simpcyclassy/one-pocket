import { takeLatest, call, put } from 'redux-saga/effects';

import { VERIFICATION_REQUEST } from './actionTypes';
import { verificationSuccess, verificationFailure } from './actions';
import { bvnService } from './services';

function* bvnUser(userData) {    
    try {
        const res = yield call(statementService, userData);
        console.log(res);

        if (res.description) {
            yield put(statementSuccess(res.data));

        } else {
            yield put(statementFailure(res.message));
        }
    } catch (error) {
        const res = yield call(statementService);
        switch (error.status) {
            case 401:
                yield put(statementFailure(res.message));
                break;
            default:
                break;
        }
    }
}

/**
 * @function
 * Watches for the {@link actionTypes} action.
 * Triggers request to capture data from body
 *
 * @return {void}
 */

function* watchBVNUser({ payload }) {
    yield call(bvnUser, payload);
}

export default function* actionWatcher() {
    yield takeLatest('', watchBVNUser);
}

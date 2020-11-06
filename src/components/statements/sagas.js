import { takeLatest, call, put } from 'redux-saga/effects';

import { STATEMENT_REQUEST } from './actionTypes';
import { statementSuccess, statementFailure } from './actions';
import { statementService } from './services';


function* userStatement() {    
    try {
        const res = yield call(statementService);
        console.log(res);
        localStorage.setItem('statements', JSON.stringify(res.data));

        if (res.data) {
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
 * Watches for the {@link actionTypes.STATEMENT_REQUEST STATEMENT_REQUEST} action.
 * Triggers request to capture data from body
 *
 * @return {void}
 */

function* watchUserAccount() {
    yield call(userStatement);
}

export default function* actionWatcher() {
    yield takeLatest(STATEMENT_REQUEST, watchUserAccount);
}

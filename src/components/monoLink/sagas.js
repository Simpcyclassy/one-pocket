import { takeEvery, call, put } from 'redux-saga/effects';

import { AUTH_REQUEST } from './actionTypes';
import { authSuccess, authFailure } from './actions';
import { authService } from './services';


function* userAuth(id) {
    const res = yield call(authService, id);
    console.log(res);
    
    try {
        if (res) {
            yield put(authSuccess(res.id));
            localStorage.setItem('id', res.id);
        } else {
            yield put(authFailure(res.message));
        }
    } catch (error) {
        switch (error.status) {
            case 500:
                yield put(authFailure(res.message));
                break;
            default:
                break;
        }
    }
}

/**
 * @function
 * Watches for the {@link actionTypes.AUTH_REQUEST AUTH_REQUEST} action.
 * Triggers request to capture data from body
 *
 * @return {void}
 */

function* watchUserAuth({ payload }) {
    yield call(userAuth, payload);
}

export default function* actionWatcher() {
    yield takeEvery(AUTH_REQUEST, watchUserAuth);
}

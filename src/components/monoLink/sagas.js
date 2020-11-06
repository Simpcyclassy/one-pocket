import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { AUTH_REQUEST } from './actionTypes';
import { authSuccess, authFailure } from './actions';
import { authService } from './services';


function* userAuth(id) {
    
    try {
        const res = yield call(authService, id);
        if (res.id) {
            yield put(authSuccess(res.id));
            localStorage.setItem('id', res.id);
            yield put(push('/sites'));
        } else {
            yield put(authFailure(res.message));
        }
    } catch (error) {
        const res = yield call(authService, id);
        switch (error.status) {
            case 400:
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
    yield takeLatest(AUTH_REQUEST, watchUserAuth);
}

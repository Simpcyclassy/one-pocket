import { takeEvery, call, put } from 'redux-saga/effects';


function* bvnUser(userData) {
    try {
        if (true) {
            yield put(()=> {});
        } else {
            yield put(()=>{});
        }
    } catch (error) {
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
    yield takeEvery('', watchBVNUser);
}

import { all } from 'redux-saga/effects';

import accounts from '../accounts';

const actionWatcherAccount = accounts.sagas;

export default function* rootSaga() {
    yield all([
        actionWatcherAccount(),
    ]);
}

import { all } from 'redux-saga/effects';

import accounts from './accounts';
import monoLink from './monoLink';

export default function* rootSaga() {
    yield all([
        accounts.sagas(),
        monoLink.sagas(),
    ]);
}

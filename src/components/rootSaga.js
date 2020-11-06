import { all } from 'redux-saga/effects';

import accounts from './accounts';
import monoLink from './monoLink';
import statements from './statements';

export default function* rootSaga() {
    yield all([
        accounts.sagas(),
        monoLink.sagas(),
        statements.sagas()
    ]);
}

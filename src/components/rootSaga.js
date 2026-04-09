import { all } from 'redux-saga/effects';

import accounts from './accounts';
import monoLink from './monoLink';
import statements from './statements';
import verifications from './verifications';

export default function* rootSaga() {
    yield all([
        accounts.sagas(),
        monoLink.sagas(),
        statements.sagas(),
        verifications.sagas()
    ]);
}

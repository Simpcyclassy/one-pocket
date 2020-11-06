import { all } from 'redux-saga/effects';

import verifications from './verifications';

export default function* rootSaga() {
    yield all([
        verifications.sagas(),
    ]);
}

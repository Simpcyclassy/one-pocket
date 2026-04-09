import { combineReducers } from 'redux';

import accounts from './accounts';
import monoLink from './monoLink';
import statements from './statements';
import verifications from './verifications';

export default combineReducers({
  accounts: accounts.reducers,
  monoConnect: monoLink.reducers,
  statements: statements.reducers,
  verifications: verifications.reducers
});

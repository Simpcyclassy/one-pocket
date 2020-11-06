import { combineReducers } from 'redux';

import accounts from './accounts';
import monoLink from './monoLink';

export default combineReducers({
  accounts: accounts.reducers,
  monoConnect: monoLink.reducers,
});

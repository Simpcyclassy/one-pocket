import { combineReducers } from 'redux';

import verifications from './verifications';
import monoLink from './monoLink';

export default combineReducers({
  verifications: verifications.reducers,
  monoConnect: monoLink.reducers,
});

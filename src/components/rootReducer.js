import { combineReducers } from 'redux';

import verifications from './verifications';

export default combineReducers({
  verifications: verifications.reducers,
});

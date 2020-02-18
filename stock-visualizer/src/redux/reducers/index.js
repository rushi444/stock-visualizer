// import { combineReducers } from 'redux';
// import { stockReducer } from './stockReducer';

// export const rootReducer = combineReducers({
//   stockReducer,
// });

import { combineReducers } from 'redux';
import { stockReducer } from './stockReducer';

const rootReducer = combineReducers({
  stockReducer,
});

export default rootReducer;

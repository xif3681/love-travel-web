import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { combineReducers } from 'redux'
// import { enthusiasm } from './reducers/index';
import rootReducer from './reducers'
// import { StoreState } from './types/index';
// import { EnthusiasmAction } from './actions/index';
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  
  )

// const store = createStore<StoreState, EnthusiasmAction, null, null>(enthusiasm, {
//   enthusiasmLevel: 1,
//   languageName: 'TypeScript',
// });
export default store;
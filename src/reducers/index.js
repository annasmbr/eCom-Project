import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'; 

import headerNavbar from './headernavbarReducer';
//import HeaderNavbar from './headernavbarReducer';

const rootReducer = combineReducers({
  form,
  headerNavbar
  //HeaderNavbar
  //state: (state = {}) => state
});

export default rootReducer;
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'; 

import headerNavbar from './headernavbarReducer';
//import HeaderNavbar from './headernavbarReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  form,
  headerNavbar,
  user
  //HeaderNavbar
  //state: (state = {}) => state
});

export default rootReducer;
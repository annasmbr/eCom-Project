import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'; 

import headerNavbar from './headernavbarReducer';
//import HeaderNavbar from './headernavbarReducer';
import user from './userReducer';
import shop from './shopReducer';

const rootReducer = combineReducers({
  form,
  headerNavbar,
  user,
  shop
  //HeaderNavbar
  //state: (state = {}) => state
});

export default rootReducer;
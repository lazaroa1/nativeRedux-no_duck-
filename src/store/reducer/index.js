import {combineReducers} from 'redux';
import login from './login';
import repositories from './reporsitories';

export default combineReducers({
  login,
  repositories,
});

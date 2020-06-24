import { combineReducers } from 'redux';
import ThemeOptions from "./ThemeOptions";
import auth from './auth'


export default combineReducers({
  ThemeOptions,
  auth
});

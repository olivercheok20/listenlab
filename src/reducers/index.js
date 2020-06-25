import { combineReducers } from 'redux';
import ThemeOptions from "./ThemeOptions";
import auth from './auth';
import profile from './profile';


export default combineReducers({
  ThemeOptions,
  auth,
  profile
});

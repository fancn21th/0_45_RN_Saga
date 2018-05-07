import { combineReducers } from 'redux'
import todos from './todos'

const allReducers = {
  todos,
};

export default combineReducers(allReducers);

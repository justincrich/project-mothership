import { combineReducers } from 'redux';
import leaderReducer from './leaders/reducer';

export default combineReducers({ leaders: leaderReducer });

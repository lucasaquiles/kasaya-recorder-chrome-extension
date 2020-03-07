import { combineReducers } from 'redux';
import { recorderReducer } from './recorderReducer';

export const Reducers = combineReducers({
	recorderState : recorderReducer
});


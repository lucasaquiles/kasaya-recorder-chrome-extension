import { START_RECORDER } from "../actions/actionsType"
import { STOP_RECORDER } from "../actions/actionsType"

const initialState = {
	isRecording: false
};

export const recorderReducer = (state = initialState, action) => {
	console.log("valor: ", initialState);
	console.log(action.type);
	
	switch(action.type) {

		case START_RECORDER : return {
			...state, 
			isRecording: action.isRecording
		};

		case STOP_RECORDER: return {
			...state, 
			isRecording: action.isRecording
		};

		default: 
			return state
	}
};

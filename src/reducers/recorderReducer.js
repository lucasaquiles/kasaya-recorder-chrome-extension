import {START_RECORDER} from "../actions/actionsType"

const initialState = {
	value: 1
};

export const recorderReducer = (state = initialState, action) => {

	switch(action.type){
		
		case START_RECORDER : return {
			...state, 
			value: action.value++
		};
		default: 
			return false;
	}
};

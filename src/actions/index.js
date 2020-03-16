import { START_RECORDER } from './actionsType'
import { STOP_RECORDER } from './actionsType'
import { INIT } from './actionsType'

const KASAYA_KEY_STORAGE = "kasaya-extension";

function updateStorage(payload) {
	
	localStorage.setItem(KASAYA_KEY_STORAGE, JSON.stringify(payload));

	console.log("updateStorage", JSON.stringify(payload));
}

export const init = () => {

	var storage = localStorage.getItem(KASAYA_KEY_STORAGE);
	console.log("iniciou a bagaça: ", JSON.parse(storage).isRecording);
	return {
		type: INIT,
		isRecording: JSON.parse(storage).isRecording
	}
}


export const startRecord = () => {
	
	const startPayload =  {
		type: START_RECORDER,
		isRecording: true
	};

	updateStorage(startPayload);

	return startPayload;
};

export const stopRecord = () => {

	const stopPayload = {
		type: STOP_RECORDER,
		isRecording: false
	}

	updateStorage(stopPayload);
	
	return stopPayload;
};


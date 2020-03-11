import { START_RECORDER } from './actionsType'
import { STOP_RECORDER } from './actionsType'

export const startRecord = () => (
	{
		type: START_RECORDER,
		isRecording: true
	}
);

export const stopRecord = () => ({
	type: STOP_RECORDER,
	isRecording: false
});
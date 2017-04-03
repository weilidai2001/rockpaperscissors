import { GameChoice } from '../constants/game-choices';

export default function GameLogic(state = {}, action) {
	if (Object.values(GameChoice).includes(action.type)) {
		return {choice: action.type};
	} else {
		return state;
	}
}

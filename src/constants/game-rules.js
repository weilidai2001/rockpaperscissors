import { GameChoice } from './game-choices';

export const GameRules = {
	[GameChoice.CHOICE_ROCK]: {
		wins: [GameChoice.CHOICE_SCISSORS],
		loses: [GameChoice.CHOICE_PAPER]
	},
	[GameChoice.CHOICE_PAPER]: {
		wins: [GameChoice.CHOICE_ROCK],
		loses: [GameChoice.CHOICE_SCISSORS]
	},
	[GameChoice.CHOICE_SCISSORS]: {
		wins: [GameChoice.CHOICE_PAPER],
		loses: [GameChoice.CHOICE_ROCK]
	}
};

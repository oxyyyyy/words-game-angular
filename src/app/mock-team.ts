import { Player } from './players'

export const team1Players: Player[] = [
	{
		id: 0,
		nickname: 'team-1 player-1',
		team: 1,
		isPresenter: false,
		isCreator: false
	},
	{
		id: 1,
		nickname: 'team-1 player-2',
		team: 1,
		isPresenter: true,
		isCreator: false
	}
];
export const team2Players: Player[] = [
	{
		id: 0,
		nickname: 'team-2 player-1',
		team: 2,
		isPresenter: true,
		isCreator: false
	},
	{
		id: 1,
		nickname: 'team-2 player-2',
		team: 2,
		isPresenter: false,
		isCreator: true
	}
];
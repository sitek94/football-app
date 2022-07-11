import {Player} from '@api/players/players.models'
import {Team} from '@api/teams/teams.models'

import playersJson from './players.json'
import teamsJson from './teams.json'

export const teams: Team[] = teamsJson
export const players: Player[] = playersJson

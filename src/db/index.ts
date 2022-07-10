import {Player} from 'api/players/models'
import {Team} from 'api/teams/models'
import playersJson from 'db/players.json'
import teamsJson from 'db/teams.json'

export const teams: Team[] = teamsJson
export const players: Player[] = playersJson

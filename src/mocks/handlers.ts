import {baseUrl} from 'api/client'
import {players} from 'mocks/data/players'
import {teams} from 'mocks/data/teams'
import {rest} from 'msw'

export const handlers = [
  rest.get(`${baseUrl}/teams`, (req, res, ctx) => {
    const pageSize = 10

    return res(ctx.status(200), ctx.json(teams.slice(0, pageSize)))
  }),

  rest.get(`${baseUrl}/teams/:teamId`, (req, res, ctx) => {
    const {teamId} = req.params
    const team = teams.find(t => t.id === teamId)
    if (!team) {
      return res(ctx.status(404))
    }

    return res(ctx.status(200), ctx.json(team))
  }),

  rest.get(`${baseUrl}/players`, (req, res, ctx) => {
    const pageSize = 10

    return res(ctx.status(200), ctx.json(players.slice(0, pageSize)))
  }),
]

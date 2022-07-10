import {baseUrl} from 'api/client'
import * as db from 'db'
import {rest} from 'msw'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const handlers = [
  rest.get(`${baseUrl}/teams`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(db.teams))
  }),

  rest.get(`${baseUrl}/teams/:teamId`, (req, res, ctx) => {
    const {teamId} = req.params
    const team = db.teams.find(t => t.id === teamId)
    if (!team) {
      return res(ctx.status(404))
    }

    return res(ctx.status(200), ctx.json(team))
  }),

  rest.get(`${baseUrl}/teams/:teamId/players`, (req, res, ctx) => {
    const {teamId} = req.params
    const playersForTeam = db.players.filter(p => p.team.id === teamId)
    return res(ctx.status(200), ctx.json(playersForTeam))
  }),
].map((handler: any) => {
  const originalResolver = handler.resolver
  handler.resolver = async (req, res, ctx) => {
    try {
      return originalResolver(req, res, ctx)
    } finally {
      await sleep(0)
    }
  }
  return handler
})

import {mapDtoToPlayer, saveJson, sleep} from './utils.js'
import {get, getRaw} from './api.js'

async function fetchPlayers({leagueId, seasonYear}) {
  const players = []
  const {paging, response} = await get('players', {
    league: leagueId,
    season: seasonYear,
  })

  players.push(...response)
  const pageCount = paging.total
  let shouldContinue = true

  for (let page = 1; shouldContinue; page++) {
    if (page >= pageCount) {
      shouldContinue = false
      break
    }

    try {
      const response = await getRaw('players', {
        league: leagueId,
        season: seasonYear,
        page,
      })
      const data = await response.json()
      console.log(`Page ${page}: ${data.response.length} players`)

      if (!data.response) {
        console.log('No players in response')
        console.log(response)
        shouldContinue = false
      }

      // Wait a bit to avoid hitting the API too hard, and to avoid getting
      // blocked by the server. Rate limiting is 30 requests per minute.
      await sleep(6000)
      players.push(...data.response)
    } catch (e) {
      console.log(e)
    }
  }

  console.log(`Finished fetching ${pageCount} pages`)
  console.log(`Found ${players.length} players`)

  return players.map(mapDtoToPlayer)
}

const premierLeagueId = 39

async function run() {
  const allPlayers = await fetchPlayers({
    leagueId: premierLeagueId,
    seasonYear: 2022,
    pageStart: 0,
    pageEnd: 39,
  })
  saveJson('players-all', allPlayers)
}

run()

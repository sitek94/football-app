require('dotenv').config()

const fetch = require('node-fetch')
const {saveJson} = require('./utils')

async function client(endpoint, params) {
  const searchParams = new URLSearchParams(params).toString()
  const url = `https://v3.football.api-sports.io/${endpoint}?${searchParams}`
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': process.env.API_KEY,
    },
  })
  return response.json()
}

async function fetchAllPlayers({leagueId, seasonYear}) {
  const players = []
  const {paging, response} = await client('players', {
    league: leagueId,
    season: seasonYear,
  })

  players.push(...response)
  const pageCount = paging.total

  if (pageCount > 1) {
    console.log(`More than one page, fetching total of ${pageCount} pages`)

    for (let i = 2; i <= pageCount; i++) {
      console.log(`Fetching page ${i}`)

      const {response} = await client('players', {
        league: leagueId,
        season: seasonYear,
        page: i,
      })
      players.push(...response)
    }
  }
  console.log(`Finished fetching ${pageCount} pages`)
  console.log(`Found ${players.length} players`)

  return players
}

const premierLeagueId = 39

async function run() {
  const allPlayers = await fetchAllPlayers({
    leagueId: premierLeagueId,
    seasonYear: 2022,
  })
  saveJson('players-raw', allPlayers)
}

run()

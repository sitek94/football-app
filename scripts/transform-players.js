const fs = require('fs')
const {saveJson} = require('./utils')

const json = fs.readFileSync('./data/players-raw.json', 'utf-8')
const data = JSON.parse(json)
const players = []

for (let {player, statistics} of data) {
  players.push({
    // I simply don't like the way API is returning the data 🤷
    ...player,
    statistics,
  })
}

saveJson('new-players', players)

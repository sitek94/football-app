import {readJson, saveJson} from './utils.js'

function removeDuplicates() {
  const json = readJson('players-all')
  const unique = []

  for (const player of json) {
    if (!unique.some(p => p.id === player.id)) {
      unique.push(player)
    }
  }

  saveJson('players-unique', unique)
}

removeDuplicates()

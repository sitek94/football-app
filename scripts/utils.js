import {fileURLToPath} from 'url'
import {dirname} from 'path'
import fs from 'fs'

export const __dirname = dirname(fileURLToPath(import.meta.url))

export function saveJson(filename, json) {
  const dataDir = `${__dirname}/data`
  const fileName = `${filename}.json`

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir)
  }

  const filePath = `${dataDir}/${fileName}`
  const jsonString = JSON.stringify(json, null, 2)
  fs.writeFileSync(filePath, jsonString)
}

export function readJson(filename) {
  const filePath = `${__dirname}/data/${filename}.json`
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function mapDtoToPlayer(dto) {
  dto = mapNumericIdsToStrings(dto)
  // Team and league doesn't seem like a statistic to me, it's going to be
  // available directly on the player object.
  // Btw. `statistics` is an array, but it always has one element, at least
  // when fetching data for one season.
  const {team, league, ...statistics} = dto.statistics[0]
  return {
    ...dto.player,
    statistics,
    team,
    league,
  }
}

export function mapNumericIdsToStrings(obj) {
  const json = JSON.stringify(obj)
  const parsed = json.replace(/"id":(\d+)/g, '"id": "$1"')
  return JSON.parse(parsed)
}

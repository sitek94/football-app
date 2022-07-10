import fs from 'fs'
import {__dirname, saveJson} from './utils.js'

const json = fs.readFileSync(`${__dirname}/data/players-raw.json`, 'utf-8')

// Replace numeric IDs with strings.
const parsed = json.replace(/"id":(\d+)/g, '"id": "$1"')
console.log(parsed)
// console.log(json)
const data = JSON.parse(parsed)

saveJson('new-players', data)

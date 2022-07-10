import {getRaw} from 'scripts/api.js'

getRaw('status').then(console.log).catch(console.error)

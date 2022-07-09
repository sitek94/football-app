const fs = require('fs')

function saveJson(filename, json) {
  const dataDir = `${__dirname}/data`
  const fileName = `${filename}.json`

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir)
  }

  const filePath = `${dataDir}/${fileName}`
  const jsonString = JSON.stringify(json, null, 2)
  fs.writeFileSync(filePath, jsonString)
}

module.exports = {saveJson}

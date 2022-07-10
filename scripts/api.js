import 'dotenv/config'

const baseURL = 'https://v3.football.api-sports.io'

async function client(path, params, options = {headers: {}}) {
  let url = `${baseURL}/${path}`
  const searchParams = new URLSearchParams(params).toString()
  if (searchParams) {
    url += `?${searchParams}`
  }
  const response = await fetch(url, {
    ...options,
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': process.env.API_KEY2,
      ...options.headers,
    },
  })
  return response
}

export function getRaw(...args) {
  return client(...args)
}

export function get(...args) {
  return client(...args).then(res => {
    console.log(res)
    return res.json()
  })
}

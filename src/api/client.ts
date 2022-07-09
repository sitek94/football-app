import {Team} from './models'

const baseUrl = `https://www.balldontlie.io/api/v1`

async function client<TData>(endpoint: string, customConfig: RequestInit = {}) {
  const config = {
    method: 'GET',
    ...customConfig,
  }

  const response = await window.fetch(`${baseUrl}/${endpoint}`, config)
  const json: {
    data: TData
  } = await response.json()
  return json.data
}

export function getTeams() {
  return client<Team[]>('/teams')
}

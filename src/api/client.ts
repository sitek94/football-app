const baseUrl = `https://www.balldontlie.io/api/v1`

function client(endpoint: string, customConfig: RequestInit = {}) {
  const config = {
    method: 'GET',
    ...customConfig,
  }

  return window
    .fetch(`${baseUrl}/${endpoint}`, config)
    .then(response => response.json())
}

export function getTeams() {
  return client('/teams')
}

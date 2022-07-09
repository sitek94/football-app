const baseUrl = `https://www.balldontlie.io/api/v1`

export async function client<TData>(
  endpoint: string,
  customConfig: RequestInit = {},
) {
  const config = {
    method: 'GET',
    ...customConfig,
  }

  const response = await window.fetch(`${baseUrl}/${endpoint}`, config)
  const json: TData = await response.json()
  return json
}

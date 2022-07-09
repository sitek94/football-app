export const baseUrl = 'https://myapi.com'

export async function client<TData>(
  endpoint: string,
  customConfig: RequestInit = {},
) {
  const config = {
    method: 'GET',
    ...customConfig,
  }

  const response = await window.fetch(`${baseUrl}${endpoint}`, config)
  const json: TData = await response.json()
  return json
}

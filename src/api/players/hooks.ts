import {client} from 'api/client'
import {Player} from 'api/players/models'
import {useQuery, useQueryClient} from 'react-query'

function getPlayers() {
  return client<Player[]>('/players')
}

export function usePlayers() {
  const {data: players, ...query} = useQuery('players', getPlayers)
  return {
    ...query,
    players,
  }
}

function getPlayer(id: Player['id']) {
  return client<Player>(`/players/${id}`)
}

export function usePlayer(id: Player['id']) {
  const queryClient = useQueryClient()
  const {data: player, ...query} = useQuery(
    ['player', id],
    () => getPlayer(id),
    {
      initialData: () => {
        const players = queryClient.getQueryData<Player[]>('players')
        return players?.find(player => player.id === id)
      },
    },
  )
  return {
    ...query,
    player,
  }
}

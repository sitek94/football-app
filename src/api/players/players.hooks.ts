import {client} from 'api/client'
import {Player} from 'api/players/players.models'
import {Team} from 'api/teams/teams.models'
import {useQuery, useQueryClient} from 'react-query'

function getPlayers(teamId: Team['id']) {
  return client<Player[]>(`/players?teamId=${teamId}`)
}

export function usePlayers(teamId?: Team['id']) {
  const {data: players, ...query} = useQuery('players', () =>
    getPlayers(teamId),
  )
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

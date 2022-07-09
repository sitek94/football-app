import {client} from 'api/client'
import {Team} from 'api/teams/models'
import {useQuery, useQueryClient} from 'react-query'

function getTeams() {
  return client<Team[]>('/teams')
}

export function useTeams() {
  const {data: teams, ...query} = useQuery('teams', getTeams)
  return {
    ...query,
    teams,
  }
}

function getTeam(id: Team['id']) {
  return client<Team>(`/teams/${id}`)
}

export function useTeam(id: Team['id']) {
  const queryClient = useQueryClient()
  const {data: team, ...query} = useQuery(['team', id], () => getTeam(id), {
    initialData: () => {
      const teams = queryClient.getQueryData<Team[]>('teams')
      return teams?.find(team => team.id === id)
    },
  })
  return {
    ...query,
    team,
  }
}

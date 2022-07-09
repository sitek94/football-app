import {client} from 'api/client'
import {useQuery, useQueryClient} from 'react-query'

interface TeamDTO {
  abbreviation: string
  city: string
  conference: string
  division: string
  full_name: string
  id: string
  name: string
}

export type Team = Omit<TeamDTO, 'full_name' | 'id'> & {
  id: string
  fullName: string
}

function mapToTeam(dto: TeamDTO): Team {
  return {
    ...dto,
    id: String(dto?.id),
    fullName: dto?.full_name,
  }
}

async function getTeams() {
  const dto = await client<{data: TeamDTO[]}>('/teams')
  return dto.data.map(mapToTeam)
}

export function useTeams() {
  const {data: teams, ...query} = useQuery('teams', getTeams)
  return {
    ...query,
    teams,
  }
}

async function getTeam(id: Team['id']) {
  const dto = await client<TeamDTO>(`/teams/${id}`)
  console.log(dto)
  return mapToTeam(dto)
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

import {useQuery} from 'react-query'
import * as client from './client'

export function useTeams() {
  const {data: teams, ...query} = useQuery('teams', client.getTeams)
  return {
    ...query,
    teams,
  }
}

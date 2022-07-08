import {useQuery} from 'react-query'
import * as client from './client'

export function useTeams() {
  return useQuery('teams', client.getTeams)
}

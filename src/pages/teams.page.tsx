import {useTeams} from 'api/teams/hooks'
import {PageHeader} from 'ui-kit/page-header'
import {TeamsTable} from 'ui-kit/teams-table'

export function TeamsPage() {
  const {teams} = useTeams()

  return (
    <>
      <PageHeader title="Teams" />
      {teams?.length > 0 ? <TeamsTable teams={teams} /> : <p>No teams found</p>}
    </>
  )
}

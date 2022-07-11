import {useTeams} from '@api/teams/teams.hooks'

import {TeamsTable} from '@pages/teams/teams-table'

import {PageHeader} from '@ui-kit/page-header'

export function TeamsPage() {
  const {teams, isLoading, isError} = useTeams()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <>
      <PageHeader title="Teams" />
      {teams?.length > 0 ? <TeamsTable teams={teams} /> : <p>No teams found</p>}
    </>
  )
}

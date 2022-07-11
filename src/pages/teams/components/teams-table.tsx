import * as React from 'react'

import {useTeams} from '@api/teams/teams.hooks'

import {TeamsTableView} from './teams-table.view'

export function TeamsTable() {
  return (
    <React.Suspense fallback={<TeamsTableSkeleton />}>
      <ConnectedTeamsTable />
    </React.Suspense>
  )
}

function ConnectedTeamsTable() {
  const {teams} = useTeams()

  return <TeamsTableView teams={teams} />
}

function TeamsTableSkeleton() {
  return (
    <div className="animate-pulse space-y-2">
      <div className="rounded bg-gray-200 h-16" />
      {Array.from({length: 10}).map((_, i) => (
        <div key={i} className="rounded bg-gray-200 h-20" />
      ))}
    </div>
  )
}

import {PageHeader} from '@ui-kit/page-header'

import {TeamsTable} from './components/teams-table'

export function TeamsPage() {
  return (
    <>
      <PageHeader title="Teams" />
      <TeamsTable />
    </>
  )
}

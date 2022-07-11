import {PageHeader} from '@ui-kit/page-header'
import {PlayersCards} from './components/players-cards'

export function PlayersPage() {
  return (
    <>
      <PageHeader
        title="Players"
        links={[
          {name: 'Overview', to: '../..'},
          {name: 'Players', to: '.'},
        ]}
      />
      <PlayersCards  />
    </>
  )
}

import {usePlayers} from 'api/players/players.hooks'
import {PlayersCards} from 'pages/players/players-cards'
import {useParams} from 'react-router-dom'
import {PageHeader} from 'ui-kit/page-header'

export function PlayersPage() {
  const teamId = useParams().teamId!
  const {players} = usePlayers(teamId)

  return (
    <>
      <PageHeader
        title="Players"
        links={[
          {name: 'Overview', to: '../..'},
          {name: 'Players', to: '.'},
        ]}
      />
      {players?.length > 0 ? (
        <PlayersCards players={players} />
      ) : (
        <p>No players found</p>
      )}
    </>
  )
}

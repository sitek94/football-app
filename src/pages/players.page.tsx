import {usePlayers} from 'api/players/players.hooks'
import {useParams} from 'react-router-dom'
import {PageHeader} from 'ui-kit/page-header'
import {PlayersList} from 'ui-kit/players-list'

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
        <PlayersList players={players} />
      ) : (
        <p>No players found</p>
      )}
    </>
  )
}

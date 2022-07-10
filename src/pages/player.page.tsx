import {usePlayer} from 'api/players/players.hooks'
import {useParams} from 'react-router-dom'
import {PageHeader} from 'ui-kit/page-header'
import {PlayerDetails} from 'ui-kit/player-details'

export function PlayerPage() {
  const playerId = useParams().playerId!
  const {player, isLoading, isError} = usePlayer(playerId)

  if (!isLoading && !player) {
    return <p>Player not found</p>
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error</p>
  }

  return (
    <>
      <PageHeader title={player.name} />
      <PlayerDetails player={player} />
    </>
  )
}

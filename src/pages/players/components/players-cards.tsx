import * as React from 'react'
import {useParams} from 'react-router-dom'

import {usePlayers} from '@api/players/players.hooks'

import {PlayersCardsView} from './players-cards.view'

function ConnectedPlayersCards() {
  const teamId = useParams().teamId!
  const {players} = usePlayers(teamId)
  return <PlayersCardsView players={players} />
}

function PlayersCardsSkeleton() {
  return (
    <div className="animate-pulse space-y-2">
      <div className="rounded bg-gray-200 h-16" />
      <div className="rounded bg-gray-200 h-16" />
    </div>
  )
}

export function PlayersCards() {
  return (
    <React.Suspense fallback={<PlayersCardsSkeleton />}>
      <ConnectedPlayersCards />
    </React.Suspense>
  )
}

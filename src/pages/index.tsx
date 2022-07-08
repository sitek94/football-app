import * as React from 'react'
import {useTeams} from '../api/hooks'

export function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <a href="/teams">Teams</a>
          </li>
        </ul>
      </nav>
    </main>
  )
}

export function TeamsPage() {
  const query = useTeams()
  console.log(query)
  return (
    <main>
      <h1>Teams</h1>
    </main>
  )
}

export function TeamPage() {
  return (
    <main>
      <h1>Team</h1>
    </main>
  )
}

export function PlayersPage() {
  return (
    <main>
      <h1>Players</h1>
    </main>
  )
}

export function PlayerPage() {
  return (
    <main>
      <h1>Player</h1>
    </main>
  )
}

export function PlayerStatsPage() {
  return (
    <main>
      <h1>Player Stats</h1>
    </main>
  )
}

import * as React from 'react'
import {useTeams} from '../api/hooks'
import {PageHeader} from '../ui-kit/page-header'
import {TeamsTable} from '../ui-kit/teams-table'
import {Team} from '../api/models'

export function HomePage() {
  return (
    <>
      <PageHeader title="Home" />
      <div className="prose">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          aperiam earum et ex facilis ipsam nihil nulla quam quidem, sapiente
          similique, veniam vero voluptate. Pariatur quam quos repellendus
          similique voluptas.
        </p>
        <img
          src="https://images.unsplash.com/photo-1602931524303-e3b812d7f570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
          alt=""
        />
        <p>
          Aliquid, doloremque, doloribus, ea eius eos exercitationem explicabo
          fugiat fugit harum illo ipsa ipsum iste itaque iure laboriosam libero
          magni maxime minima minus molestiae natus nesciunt nihil nobis nostrum
          numquam obcaecati odio officia omnis optio pariatur perferendis
          perspiciatis placeat quae quam.
        </p>
      </div>
    </>
  )
}

export function TeamsPage() {
  const {teams} = useTeams()

  return (
    <>
      <PageHeader title="Teams" />
      {teams?.length > 0 ? <TeamsTable teams={teams} /> : <p>No teams found</p>}
    </>
  )
}

export function TeamPage() {
  return (
    <>
      <PageHeader title="Team" />
    </>
  )
}

export function PlayersPage() {
  return (
    <>
      <PageHeader title="Players" />
    </>
  )
}

export function PlayerPage() {
  return (
    <>
      <PageHeader title="Player" />
    </>
  )
}

export function PlayerStatsPage() {
  return (
    <>
      <PageHeader title="Player Stats" />
    </>
  )
}

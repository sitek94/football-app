import {useParams} from 'react-router-dom'

import {useTeam} from '@api/teams/teams.hooks'

import {PageHeader} from '@ui-kit/page-header'

export function TeamPage() {
  const {teamId} = useParams<{teamId: string}>()
  const {team} = useTeam(teamId)
  if (!team) {
    return <h3>Loading</h3>
  }
  return (
    <>
      <PageHeader
        title={team.name}
        links={[
          {name: 'Overview', to: '.'},
          {name: 'Players', to: 'players'},
        ]}
      />

      <article className="prose">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          euismod, nisi vel consectetur euismod, nisi nisi consectetur nisi,
          euismod euismod nisi nisi euismod nisi.
        </p>

        <figure>
          <img src={team.venue.image} alt={team.venue.name} />
          <figcaption>{`${team.venue.name}, ${team.venue.city}`}</figcaption>
        </figure>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos incidunt
          nostrum ullam unde. Ab amet, aspernatur deserunt dignissimos ducimus
          excepturi, inventore labore laboriosam molestiae quaerat quisquam quo
          reprehenderit totam, voluptas.
        </p>
      </article>
    </>
  )
}

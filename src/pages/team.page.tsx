import {useTeam} from 'api/teams'
import {useParams} from 'react-router-dom'
import {PageHeader} from 'ui-kit/page-header'

export function TeamPage() {
  const {teamId} = useParams<{teamId: string}>()
  const {team} = useTeam(teamId)
  if (!team) {
    return <h3>Loading</h3>
  }
  return (
    <>
      <PageHeader title={team.fullName} />
      <div className="prose">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
          debitis, doloribus eaque facere possimus repudiandae sunt. Aspernatur,
          commodi eligendi eveniet excepturi fuga inventore ipsum odit porro
          quibusdam quos unde, ut.
        </p>
      </div>
    </>
  )
}

import {Player} from 'api/players/players.models'
import {Link} from 'react-router-dom'

interface PlayersListProps {
  players: Player[]
}

export function PlayersList({players}: PlayersListProps) {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {players.map(player => (
          <li key={player.id}>
            <Link to={player.id} className="block hover:bg-gray-50">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="flex min-w-0 flex-1 items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={player.photo}
                      alt={player.name}
                    />
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p className="truncate text-sm font-medium text-indigo-600">
                        {player.name}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        <span className="truncate">{player.nationality}</span>
                      </p>
                    </div>
                    <p className="text-sm text-gray-900">
                      Date of birth:{' '}
                      <time dateTime={player.birth.date}>
                        {player.birth.date}
                      </time>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

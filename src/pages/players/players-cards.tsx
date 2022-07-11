import clsx from 'clsx'
import {Link} from 'react-router-dom'

import {Player} from '@api/players/players.models'

interface PlayerCardsProps {
  players: Player[]
}

export function PlayersCards({players}: PlayerCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {players.map(player => (
        <div
          key={player.id}
          className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src={player.photo}
              alt={player.name}
            />
          </div>
          <div className="min-w-0 flex-1">
            <Link to={player.id} className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <div className="flex items-center space-x-3">
                <p className="text-sm font-medium text-gray-900">
                  {player.name}
                </p>
                <span
                  className={clsx(
                    'inline-block flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium',
                    getBadgeColor(player.statistics.games.position),
                  )}
                >
                  {player.statistics.games.position}
                </span>
              </div>
              <p className="truncate text-sm text-gray-500">
                {player.nationality}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

function getBadgeColor(position: Player['statistics']['games']['position']) {
  switch (position) {
    case 'Goalkeeper':
      return 'bg-green-100 text-green-800'
    case 'Defender':
      return 'bg-blue-100 text-blue-800'
    case 'Midfielder':
      return 'bg-yellow-100 text-yellow-800'
    case 'Attacker':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

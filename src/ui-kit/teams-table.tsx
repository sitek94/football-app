import {Team} from 'api/teams/models'
import clsx from 'clsx'
import {Link} from 'react-router-dom'

interface TeamsTableProps {
  teams: Team[]
}

const columns: {name: string; accessor: keyof Team}[] = [
  {name: 'Logo', accessor: 'logo'},
  {name: 'Name', accessor: 'name'},
  {name: 'Venue', accessor: 'venue'},
  {name: 'Founded', accessor: 'founded'},
]

export function TeamsTable({teams}: TeamsTableProps) {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {columns.map(({name}) => (
                    <th
                      key={name}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {teams.map((team, rowIndex) => (
                  <tr
                    key={team.id}
                    className={clsx(
                      rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50',
                      'hover:bg-gray-100',
                    )}
                  >
                    {columns.map(({accessor}) => {
                      if (accessor === 'logo') {
                        return (
                          <td key={accessor} className="px-6 py-4">
                            <img
                              className="h-12 w-12"
                              src={team.logo}
                              alt={`${team.name} logo`}
                            />
                          </td>
                        )
                      }

                      if (accessor === 'name') {
                        return (
                          <td
                            key={accessor}
                            className="text-sm font-medium text-gray-900"
                          >
                            <Link
                              className="block cursor-pointer whitespace-nowrap px-6 py-4 underline"
                              to={`${team.id}`}
                            >
                              {team[accessor]}
                            </Link>
                          </td>
                        )
                      }

                      return (
                        <td
                          key={accessor}
                          className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900"
                        >
                          {accessor === 'venue'
                            ? team.venue.name
                            : team[accessor]}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

import * as React from 'react'
import {Link} from 'react-router-dom'
import clsx from 'clsx'

import {Team} from 'api/models'

interface TeamsTableProps {
  teams: Team[]
}

const columns: {name: string; accessor: keyof Team}[] = [
  {name: 'Full Name', accessor: 'full_name'},
  {name: 'Conference', accessor: 'conference'},
  {name: 'Division', accessor: 'division'},
  {name: 'City', accessor: 'city'},
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
                      const value = team[accessor]

                      if (accessor === 'full_name') {
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
                          {value}
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

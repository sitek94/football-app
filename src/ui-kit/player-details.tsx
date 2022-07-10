import {Player} from 'api/players/players.models'

interface PlayerDetailsProps {
  player: Player
}

export function PlayerDetails({player}: PlayerDetailsProps) {
  return (
    <section>
      <img
        className="mb-4 block shadow sm:rounded-lg"
        src={player.photo}
        alt=""
      />

      <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
        <table className="min-w-full">
          <tbody className="divide-y divide-gray-200">
            {[
              ['First Name', player.firstname],
              ['Last Name', player.lastname],
              ['Age', player.age],
              ['Height', player.height],
              ['Weight', player.weight],
              ['Date of birth', `${player.birth.date}`],
              [
                'Place of birth',
                `${player.birth.place}, ${player.birth.country}`,
              ],
              ['Nationality', player.nationality],
            ].map(([label, value]) => (
              <tr className="hover:bg-gray-50" key={label}>
                <th
                  scope="row"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  {label}
                </th>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

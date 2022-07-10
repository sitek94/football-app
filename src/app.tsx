import {PlayerPage, PlayerStatsPage} from 'pages'
import {HomePage} from 'pages/home.page'
import {PlayersPage} from 'pages/players.page'
import {TeamPage} from 'pages/team.page'
import {TeamsPage} from 'pages/teams.page'
import {Route, RouteObject, Routes} from 'react-router-dom'

import {AppLayout} from 'ui-kit/app-layout'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {index: true, element: <HomePage />},
      {
        path: 'teams',
        children: [
          {index: true, element: <TeamsPage />},
          {
            path: ':teamId',
            children: [
              {index: true, element: <TeamPage />},
              {
                path: 'players',
                children: [
                  {index: true, element: <PlayersPage />},
                  {
                    path: ':playerId',
                    children: [
                      {index: true, element: <PlayerPage />},
                      {
                        path: 'stats',
                        element: <PlayerStatsPage />,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="teams">
          <Route index element={<TeamsPage />} />
          <Route path=":teamId">
            <Route index element={<TeamPage />} />
            <Route path="players">
              <Route index element={<PlayersPage />} />
              <Route path=":playerId">
                <Route index element={<PlayerPage />} />
                <Route path="stats" element={<PlayerStatsPage />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default App

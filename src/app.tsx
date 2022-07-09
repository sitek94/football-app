import {Route, Routes} from 'react-router-dom'

import {AppLayout} from 'ui-kit/app-layout'

import {
  HomePage,
  PlayerPage,
  PlayersPage,
  PlayerStatsPage,
  TeamPage,
  TeamsPage,
} from 'pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="teams">
          <Route index element={<TeamsPage />} />
          <Route path=":teamId" element={<TeamPage />} />
          <Route path="players">
            <Route index element={<PlayersPage />} />
            <Route path=":playerId">
              <Route index element={<PlayerPage />} />
              <Route path="stats" element={<PlayerStatsPage />} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default App

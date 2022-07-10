import {usePlayer} from 'api/players/players.hooks'
import {useTeam} from 'api/teams/teams.hooks'
import {HomePage} from 'pages/home.page'
import {PlayerStatsPage} from 'pages/player-stats.page'
import {PlayerPage} from 'pages/player/player.page'
import {PlayersPage} from 'pages/players/players.page'
import {TeamPage} from 'pages/team/team.page'
import {TeamsPage} from 'pages/teams/teams.page'
import * as React from 'react'
import {AppLayout} from 'ui-kit/app-layout'
import {
  BreadcrumbComponentProps,
  BreadcrumbsRoute,
} from 'use-react-router-breadcrumbs'

export const routes: BreadcrumbsRoute[] = [
  {
    path: '/',
    element: <AppLayout />,
    breadcrumb: 'Home',
    children: [
      {index: true, element: <HomePage />},
      {
        path: 'teams',
        children: [
          {index: true, element: <TeamsPage />},
          {
            path: ':teamId',
            breadcrumb: TeamBreadcrumb,
            children: [
              {index: true, element: <TeamPage />},
              {
                path: 'players',
                children: [
                  {index: true, element: <PlayersPage />},
                  {
                    path: ':playerId',
                    breadcrumb: PlayerBreadcrumb,
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

function PlayerBreadcrumb({match}: BreadcrumbComponentProps) {
  const {player} = usePlayer(match.params.playerId)

  return <>{player?.name || 'Player'}</>
}

function TeamBreadcrumb({match}: BreadcrumbComponentProps) {
  const {team} = useTeam(match.params.teamId)

  return <>{team?.name || 'Team'}</>
}

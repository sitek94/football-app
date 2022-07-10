export interface Player {
  id: string
  name: string
  firstname: string
  lastname: string
  age: number
  birth: Birth
  nationality: string
  height: string
  weight: string
  injured: boolean
  photo: string
  statistics: Statistic
  team: PlayerTeam
  league: League
}

interface Birth {
  date: string
  place: string
  country: string
}

interface Statistic {
  games: Games
  substitutes: Substitutes
  shots: Shots
  goals: Goals
  passes: Passes
  tackles: Tackles
  duels: Duels
  dribbles: Dribbles
  fouls: Fouls
  cards: Cards
  penalty: Penalty
}

interface Cards {
  yellow: number | null
  yellowred: number | null
  red: number | null
}

interface Dribbles {
  attempts: number | null
  success: number | null
  past: number | null
}

interface Duels {
  total: number | null
  won: number | null
}

interface Fouls {
  drawn: number | null
  committed: number | null
}

interface Games {
  appearences: number | null
  lineups: number | null
  minutes: number | null
  number: number | null
  position: string
  rating: number | null
  captain: boolean
}

interface Goals {
  total: number | null
  conceded: number | null
  assists: number | null
  saves: number | null
}

interface League {
  id: string
  name: string
  country: string
  logo: string
  flag: string
  season: number
}

interface Passes {
  total: number | null
  key: number | null
  accuracy: number | null
}

interface Penalty {
  won: number | null
  commited: number | null
  scored: number | null
  missed: number | null
  saved: number | null
}

interface Shots {
  total: number | null
  on: number | null
}

interface Substitutes {
  in: number | null
  out: number | null
  bench: number | null
}

interface Tackles {
  total: number | null
  blocks: number | null
  interceptions: number | null
}

interface PlayerTeam {
  id: string
  name: string
  logo: string
}

export interface Team {
  id: string
  name: string
  code: string
  country: string
  founded: number
  national: boolean
  logo: string
  venue: Venue
}

export interface Venue {
  id: string
  name: string
  address: string
  city: string
  capacity: number
  surface: string
  image: string
}

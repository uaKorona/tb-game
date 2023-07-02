import { type Factions } from './factions.enum'

export interface Battlefield {
  id: string
  title: string
  description: string
  defenders: Factions[]
  attackers: Factions[]
  shield: number
  score: number
  effect: any // TODO: define type
}

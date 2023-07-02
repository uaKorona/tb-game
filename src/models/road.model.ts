import { type LocationEffect } from './location-effect.model'

export interface Road {
  id: string
  order: number
  title: string
  description: string
  defense: number // 0-10
  effect: {
    players: LocationEffect[]
  }
  score: number
}

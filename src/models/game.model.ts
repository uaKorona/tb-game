import { ROADS } from '../constants/roads/roads'
import { type Road } from './road.model'
import { BATTLEFIELDS } from '../constants/battlefields/battlefields'
import { type Battlefield } from './battlefield.model'

export const game: Game = {
  roads: ROADS,
  battlefields: BATTLEFIELDS
}

export interface Game {
  roads: Record<keyof typeof ROADS, Road>
  battlefields: Record<keyof typeof BATTLEFIELDS, Battlefield>
}

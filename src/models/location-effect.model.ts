import { type PlayerTypes } from './player-types.enum'
import { type ActionTypes } from './action-types.enum'
import { type CARDS_DARK } from './cards'
import { type CardSource } from './card-source.enum'

export interface LocationEffect {
  playerType: PlayerTypes
  action: {
    order: number
    actionType: ActionTypes
    cardsIds: Array<keyof typeof CARDS_DARK>
    source: CardSource
  }
}

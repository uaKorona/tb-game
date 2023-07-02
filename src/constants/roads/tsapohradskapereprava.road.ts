import { type Road } from '../../models/road.model'
import { ANY_CARD } from '../../models/cards'
import { PlayerTypes } from '../../models/player-types.enum'
import { ActionTypes } from '../../models/action-types.enum'
import { CardSource } from '../../models/card-source.enum'

export const TSAPOHRADSKA_PEREPRAVA: Road = {
  id: 'tsapohradskapereprava',
  order: 1,
  title: 'Цапоградська переправа',
  description: 'Мордор (гравець) і Гобіт (гравець) берут по 1 карті зі своїх колод.',
  defense: 1, // 0-10
  score: 1,
  effect: {
    players: [
      {
        playerType: PlayerTypes.dark,
        action: {
          order: 1,
          actionType: ActionTypes.addOnHand,
          cardsIds: [ANY_CARD],
          source: CardSource.deck
        }
      },
      {
        playerType: PlayerTypes.light,
        action: {
          order: 2,
          actionType: ActionTypes.addOnHand,
          cardsIds: [ANY_CARD],
          source: CardSource.deck
        }
      }
    ]
  }
}

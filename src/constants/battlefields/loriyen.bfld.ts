import { Factions } from '../../models/factions.enum'
import { type Battlefield } from '../../models/battlefield.model'

export const LORIYEN: Battlefield = {
  id: 'loriyen',
  title: 'Лорієн',
  description: 'Поле битви Тіні "Дол-Гульдур" також повинно бути активоване.',
  defenders: [Factions.elves, Factions.wizards],
  attackers: [Factions.monsters, Factions.mordor],
  shield: 2,
  score: 2,
  effect: {
    // TODO: define type
  }
}

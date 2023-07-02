import express from 'express'
import { game } from '../../models/game.model'

export const gameRouter = express.Router()

gameRouter.get('/', function (req, res) {
  res.send('Hello from GAME root route.')
})

gameRouter.get('/new', function (req, res) {
  res.json(game)
})

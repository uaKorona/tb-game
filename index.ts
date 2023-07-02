import express from 'express'
import morgan from 'morgan'
import http from 'http'
import { gameRouter } from './src/controllers/game/game.ctrl'
import * as path from 'path'

const app = express()
const server = http.createServer(app)
// const io = socketIO(server);

app.use(morgan('combined'))

// Serve static files for the SPA
app.use(express.static('public'))

// API routes
app.use('/api/game', gameRouter)

// Serve the SPA for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Start the server on port 80
server.listen(8080, () => {
  console.log('Server started on port 8080')
})

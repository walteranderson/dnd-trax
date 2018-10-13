import morgan from 'morgan'
import bodyParser from 'body-parser'

import charactersRouter from '../characters/router'

export default function registerMiddleware(app) {
  app.use(bodyParser.json())
  app.use(morgan('dev'))

  app.get('/', (req, res) => res.send('hello world'))

  app.use('/api', charactersRouter)
}
import morgan from 'morgan'
import bodyParser from 'body-parser'

import errorHandler from './error-handler'
import charactersRouter from '../characters/router'
import classesRouter from '../classes/router'

export default function registerMiddleware(app) {
  app.use(bodyParser.json())
  app.use(morgan('dev'))

  app.get('/', (req, res) => res.send('hello world'))
  app.use('/api', charactersRouter)
  app.use('/api', classesRouter)

  app.use(errorHandler)
}

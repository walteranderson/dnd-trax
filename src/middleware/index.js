import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

import config from '../config'
import errorHandler from './error-handler'
import charactersRouter from '../lib/characters/router'
import classesRouter from '../lib/classes/router'

export default function registerMiddleware(app) {
  // TODO: if we need to also compile the server code, wouldn't this path to the compiled client code be different?
  // if (config.isProduction()) {
  //   app.use(express.static('client/build'))
  // }

  app.use(bodyParser.json())
  app.use(morgan('dev'))

  app.get('/api/hello', (req, res) => res.json({message: 'hello world'}))
  app.use('/api', charactersRouter)
  app.use('/api', classesRouter)

  app.use(errorHandler)
}

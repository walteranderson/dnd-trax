import express from 'express'
import { Model } from 'objection'
import Knex from 'knex'

import registerMiddleware from './middleware'
import config from './config'

// DB setup
// TODO add isProd check eventually
const knex = Knex(config.db.development)
Model.knex(knex)

const app = express()

registerMiddleware(app)

export default app

const TABLE_NAME = 'classes'

import json from './json/classes.json'

exports.seed = knex => {
  return knex(TABLE_NAME).truncate()
    .then(() => {
      return knex(TABLE_NAME).insert(json)
    })
}

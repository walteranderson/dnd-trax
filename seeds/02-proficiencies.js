const TABLE_NAME = 'proficiencies'

import json from './json/proficiencies.json'

exports.seed = knex => {
  return knex(TABLE_NAME).truncate()
    .then(() => {
      const data = [].concat(
        format(1, json.armor),
        format(2, json.weapons),
        format(3, json.artisanTools),
        format(4, json.gamingSets),
        format(5, json.musicalInstruments),
        format(6, json.vehicles),
        format(7, json.savingThrows),
        format(8, json.skills),
        format(9, json.other)
      )

      return knex(TABLE_NAME).insert(data)
    })
}

function format(type_id, names) {
  return names.map(name => {
    return {
      type_id,
      name
    }
  })
}

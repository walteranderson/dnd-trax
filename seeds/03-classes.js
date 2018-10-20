const TABLE_NAME = 'classes'

import json from './json/classes.json'

exports.seed = knex => {
  return knex(TABLE_NAME).truncate()
    .then(() => knex('classes_proficiencies').truncate())
    .then(() => {
      const data = json.map(
        ({ name, hit_die, base_health }) => ({
            name,
            hit_die,
            base_health
        })
      )

      return knex(TABLE_NAME).insert(data)
    })

    /**
     * This is brutal, but this code will create the many-to-many relationship
     * between classes and proficiencies, based on the proficiency name.
     *
     * This is so we don't have to reference the table's primary key in the JSON seed data.
     *
     * Don't look too closely :)
     */
    .then(() => {
      return Promise.all([
        knex(TABLE_NAME).pluck('id'),
        knex('proficiencies').select('id', 'name')
      ])
    })
    .then((values) => {
      const classIds = values[0]
      const proficiencies = values[1]
      const profsByName = proficiencies.reduce((acc, val) => {
        acc[val.name] = val.id
        return acc
      }, {})

      let data = []
      classIds.forEach((classId, index) => {
        const jsonProfs = json[index].proficiencies
        if (!jsonProfs) return

        const relationships = jsonProfs.map(name => {
          const profId = profsByName[name]
          return {
            proficiency_id: profId,
            class_id: classId
          }
        })

        data = data.concat(relationships)
      })

      return knex('classes_proficiencies').insert(data)
    })
}

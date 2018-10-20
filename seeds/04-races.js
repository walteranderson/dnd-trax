import json from './json/races'

exports.seed = knex => {
  return knex('races').truncate()
    .then(() => knex('subraces').truncate())
    .then(() => {
      const data = json.map(
        ({ name, speed, age, size, size_description, alignment }) => ({
          name,
          speed,
          age,
          size,
          size_description,
          alignment
        })
      )

      return knex('races').insert(data)
    })
    .then(() => knex('races').pluck('id'))
    .then((ids) => {
      let data = []
      ids.forEach((raceId, index) => {
        const subraces = json[index].subraces.map(subrace => {
          return {
            race_id: raceId,
            ...subrace
          }
        })
        data = data.concat(subraces)
      })
      return knex('subraces').insert(data)
    })
}

const TABLE_NAME = 'characters'

exports.seed = knex => {
  return knex(TABLE_NAME).truncate()
    .then(() => {
      return knex(TABLE_NAME).insert([
        { name: 'John' },
        { name: 'Jane' }
      ])
    })
}


exports.seed = knex => {
  return knex('characters').del()
    .then(() => {
      return knex('characters').insert([
        { name: 'John' },
        { name: 'Jane' }
      ])
    })
}

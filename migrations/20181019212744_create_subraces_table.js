
exports.up = knex => {
  return knex.schema
    .createTable('subraces', table => {
      table.increments('id')
      table.integer('race_id').unsigned().notNullable()
      table.string('name')
      table.string('description')

      table.foreign('race_id').references('id').inTable('races')
    })
}

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('subraces')
}

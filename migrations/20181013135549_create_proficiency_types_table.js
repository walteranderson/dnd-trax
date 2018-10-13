
exports.up = knex => {
  return knex.schema
    .createTable('proficiency_types', table => {
      table.increments('id')
      table.string('name')
    })
}

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('proficiency_types')
}

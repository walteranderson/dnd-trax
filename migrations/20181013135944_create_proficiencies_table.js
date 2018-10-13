
exports.up = knex => {
  return knex.schema
    .createTable('proficiencies', table => {
      table.increments('id')
      table.integer('type_id').unsigned().notNullable()
      table.string('name')

      table.foreign('type_id').references('id').inTable('proficiency_types')
    })
}

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('proficiencies')
}

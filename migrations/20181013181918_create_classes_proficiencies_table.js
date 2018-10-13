
exports.up = knex => {
  return knex.schema
    .createTable('classes_proficiencies', table => {
      table.increments('id')
      table.integer('class_id').unsigned().notNullable()
      table.integer('proficiency_id').unsigned().notNullable()

      table.foreign('class_id').references('id').inTable('classes')
      table.foreign('proficiency_id').references('id').inTable('proficiencies')
    })
}

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('classes_proficiencies')
}

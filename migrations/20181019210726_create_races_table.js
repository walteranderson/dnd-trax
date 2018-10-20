
exports.up = knex => {
  return knex.schema
    .createTable('races', table => {
      table.increments('id')
      table.string('name')
      table.integer('speed')
      table.string('age')
      table.string('size') // enum possibly? Small, Medium, Large
      table.string('size_description')
      table.string('alignment')

      // TODO: relationships
      // subraces
      // ability bonuses (tie to saving throws)
      // starting proficiencies
      // languages
    })
}

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('races')
}


exports.up = knex => {
  return knex.schema
    .createTable('classes', table => {
      table.increments('id')
      table.string('name')
      table.integer('hit_die')
      table.integer('base_hit_points')
    })
}

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('classes')
}

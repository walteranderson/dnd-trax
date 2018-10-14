const TABLE_NAME = 'proficiency_types'

exports.seed = knex => {
  return knex(TABLE_NAME).truncate()
    .then(() => {
      return knex(TABLE_NAME).insert([
        { name: 'Armor' },
        { name: 'Weapons' },
        { name: "Artisan's Tools" },
        { name: 'Gaming Sets' },
        { name: 'Musical Instruments' },
        { name: 'Vehicles' },
        { name: 'Saving Throws' },
        { name: 'Skills' },
        { name: 'Other' }
      ])
    })
}

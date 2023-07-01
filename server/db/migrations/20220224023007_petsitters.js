exports.up = function (knex) {
  return knex.schema.createTable('petsitters', table => {
    table.increments('id').primary()
    table.string('auth0_id').references('users.auth0_id')
    table.string('name')
    table.string('location')
    table.integer('pet_number')
    table.string('pet_type')
    table.string('pet_size')
    table.string('home_type')
    table.string('service_rate')
    table.string('availability')
    table.string('description')
    table.string('promo_listing')
    table.string('img')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('petsitters')
}

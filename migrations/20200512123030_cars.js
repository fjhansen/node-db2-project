
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments()

    // VIN
    tbl.string('VIN', 17).unique();
    // MAKE
    tbl.string('MAKE', 255)
    // MODEL
    tbl.string('MODEL', 255)
    // MILEAGE
    tbl.integer('MILEAGE', 255)
    // TRANSMISSION TYPE
    tbl.string("TRANSMISSION",255)
    // STATUS OF TITLE 
    tbl.string("TITLE", 255)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('cars')
};

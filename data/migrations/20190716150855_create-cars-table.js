exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments("id").primary();
    tbl.text("vin", 128).unique();
    tbl.text("make", 128);
    tbl.text("model", 128);
    tbl.text("mileage", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};

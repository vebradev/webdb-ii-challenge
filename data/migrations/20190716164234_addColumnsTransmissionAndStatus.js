exports.up = function(knex) {
  return knex.schema.alterTable("cars", tbl => {
    tbl.text("transmission", 128).nullable();
    tbl.text("status", 128).nullable();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("cars", tbl => {
    tbl.dropColumn("transmission");
    tbl.dropColumn("status");
  });
};

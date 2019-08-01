const faker = require("faker");

const fakeCarData = () => ({
  vin: faker.random.uuid(),
  make: faker.lorem.words(),
  model: faker.lorem.words(),
  mileage: faker.random.number(),
});

exports.seed = async function(knex) {
  const fakeCars = [];
  const fakeCarsWanted = 10;
  for (let i = 0; i < fakeCarsWanted; i++) {
    fakeCars.push(fakeCarData());
  }
  await knex("cars").insert(fakeCars);
};

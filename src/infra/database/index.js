const knex = require("knex");
const config = require("../../../knexfile");

const database = knex(config.development);

const runMigrations = async () => {
  await database.migrate.latest();
};

module.exports = { database, runMigrations };

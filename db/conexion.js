
const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'AGUS',
      password : 'grupo8',
      database : 'GENTE'
    }
  });

knex.schema.hasTable('contactos').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('contactos', function(t) {
        t.increments('id').primary();
        t.string('nombre', 100);
        t.string('apellido', 100);
        t.string('telefono', 100);
        t.string('mail', 100);
      });
    }
  });

  module.exports = knex;


const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'your_database_user',
      password : 'your_database_password',
      database : 'myapp_test'
    }
  });


knex.schema.hasTable('users').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('users', function(t) {
        t.increments('id').primary();
        t.string('nombre', 100);
        t.string('apellido', 100);
        t.string('correo', 100);
        t.string('telefono', 100);
        t.string('barrio', 100);
        t.text('consulta');
      });
    }
  });
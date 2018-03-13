'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')({
  client: 'pg',
  connection: 'postgres://oqmhyxpb:OfrePSUmGpejdZW0_szZzp6zr2u-5GAE@nutty-custard-apple.db.elephantsql.com:5432/oqmhyxpb'
});

// clear the console before each run
process.stdout.write('\x1Bc');

// Sample select 
// knex
//   .select()
//   .from('restaurants')
//   .limit(2)
//   .debug(true)
//   .then(results => console.log(results));

// knex
//   .select()
//   .table('restaurants')
//   .then(results => console.log(results));

// knex('restaurants')
//   .where('cuisine', 'Italian')
//   .then(results => console.log(results));

knex.where('cuisine', 'Italian')
  .select('id', 'name')
  .limit(10)
  .then(result=>console.log(result));





// Destroy the connection pool
knex.destroy().then(() => {
  console.log('database connection closed');
});
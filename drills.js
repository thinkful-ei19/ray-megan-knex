'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')({ 
  client: 'pg', 
    connection: 'postgres://oqmhyxpb:OfrePSUmGpejdZW0_szZzp6zr2u-5GAE@nutty-custard-apple.db.elephantsql.com:5432/oqmhyxpb' });

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

// knex('restaurants')
//   .where('cuisine', 'Italian')
//   .select('id', 'name')
//   .limit(10)
//   .then(results => console.log(results));

// knex
//   .select().table('restaurants').count()
//   .where('cuisine', 'Thai')
//   .then(results => console.log(results));
  
// knex
//   .select().table('restaurants').count()
//   .then(results => console.log(results));

// knex
//   .select().table('restaurants').count()
//   .where({cuisine: 'Thai', address_zipcode: 11372})
//   .then(results => console.log(results));

// knex
//   .select('id', 'name', 'address_zipcode').table('restaurants')
//   .where({cuisine: 'Italian'})
//   .whereIn('address_zipcode', ['10012', '10013', '10014'])
//   .orderBy('name', 'asc')
//   .limit(5)
//   .then(results => console.log(results));

// knex('restaurants')
//   .insert({
//     name: 'Byte Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Atlantic Avenue',
//     address_zipcode: '11231'
//   })
//   .returning(['id', 'name'])
//   .then(console.log);



// Destroy the connection pool
knex.destroy().then(() => {
  console.log('database connection closed');
});
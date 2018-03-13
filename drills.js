'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')({
  client: 'pg',
  connection: '<database link here>'
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

// knex('restaurants').where('cuisine', 'Italian')
//   .select()
//   .limit(10)
//   .then(result=>console.log(result));


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

//both #8 and #9 in the above...

// knex('restaurants')
//   .insert([{
//     name: 'Medusas',
//     borough: 'Brooklyn',
//     cuisine: 'vegetarian',
//     address_building_number: '123',
//     address_street: 'Atlantic Avenue',
//     address_zipcode: '11231'
//   },
//   {
//     name: 'Rays Chicken and Waffles',
//     borough: 'Brooklyn',
//     cuisine: 'American',
//     address_building_number: '553',
//     address_street: 'Waffle Avenue',
//     address_zipcode: '11231'
//   },
//   {
//     name: 'Peche',
//     borough: 'Queens',
//     cuisine: 'absinthe bar',
//     address_building_number: '453',
//     address_street: 'Green Avenue',
//     address_zipcode: '11231'
//   }
// ])
//   .returning(['id', 'name'])
//   .then(console.log);

// knex('restaurants')
//   .update('name', 'DJ Reynolds Pub and Restaurant')
//   .where('name', 'Dj Reynolds Pub And Restaurant')
//   .then(results => console.log(results));


// knex('grades')
//   .where('grade', 10)
//   .del()
//   .then(console.log);

// knex('restaurants')
//   .where('id', 22)
//   .del()
//   .then(console.log);

// Destroy the connection pool
knex.destroy().then(() => {
  console.log('database connection closed');
});
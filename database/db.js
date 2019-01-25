"use strict";
// var mysql = require('mysql2');

const mysql = require('promise-mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_NAME,
});

/**
 * Wrapper to pool.query function.
 *
 * @public
 * @async
 * @param queryStr Query you want to execute
 * @param {array} fileds array containing values to be replaced in query
 *
 * @return {string} Array containing results and fields
 */
// IMP NOTE as this is async function you need to use await when calling it.
const dbWrapper = {
  execute: async (queryStr, fields) => {
  const rows = await pool.query(queryStr, fields);
  return [rows];
}
}

// TODO: Add code to check if connection is successful or not
pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('Database connected, The solution of 1 + 1 is: ', results[0].solution);
});
  
  // This uses prepare statement hence it should be prefered
//pool.execute('SELECT 1 + 1 AS solution', (error, results, fields) => {
//  if (error) throw error;
//  console.log('Connection to DB is successful and answer to query is : ', results[0].solution);
//});



module.exports = dbWrapper;

// module.exports = pool;
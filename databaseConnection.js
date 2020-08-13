const pg = require("pg");

const pgPool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

const doQuery = function (queryText, params) {
  return new Promise((resolve, reject) => {
    pgPool.connect((err, client) => {
      if (err) reject(err); // not connected!
      else {
        client.query(queryText, params, (error, result) => {
          // When done with the connection, release it!
          client.release();
          console.log("sql: ", queryText, "params:", params);
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      }
    });
  });
};
// add to global;
global.doQuery = doQuery;
// pass it to session in index
exports.pgPool = pgPool;

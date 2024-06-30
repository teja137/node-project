import * as mysql from 'mysql';
import http from 'http';

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '1377',
//   database: 'parks_and_recreation'
// });

// connection.connect((err) => {
//   if(err){
//     console.log("Error connecting to MYSQL", err);
//     return
//   }
//   console.log("Connected ti MYSQL database");
// });

// connection.query(`SELECT * FROM parks_and_recreation.employee_demographics`, (err, result) => {
//   if(err){
//     return console.log("Error connecting to MYSQL", err);
//   }
//   return console.log(result);
  
// })

// export default connection;

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '1377',
//   database: 'parks_and_recreation',
//   connectionLimit: 10
// })

// pool.query(`SELECT * FROM parks_and_recreation.employee_demographics`, (err, result, fields) => {
//   if(err){
//     return console.log("Error connecting to MYSQL", err);
//   }
//   return console.log(result);
  
// })

// export function getEmployeeDemographics() {
//   return new Promise((resolve, reject) => {
//     pool.query('SELECT * FROM parks_and_recreation.employee_demographics', (err, results) => {
//       if (err) {
//         return reject('Error connecting to MySQL: ' + err);
//       }
//       console.log(results);
//       resolve(results);
//     });
//   });
// }
// export default pool;

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1377',
  database: 'parks_and_recreation',
  connectionLimit: 10
});

export function createServer(): http.Server {
  return http.createServer((req, res) => {
    if (req.url && req.method === 'GET' && req.url === '/api/employees') {
      res.setHeader('Content-Type', 'application/json');

      pool.query('SELECT * FROM parks_and_recreation.employee_demographics', (err, results) => {
        if (err) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: 'Error connecting to MySQL: ' + err }));
          return;
        }
        res.statusCode = 200;
        res.end(JSON.stringify(results));
      });
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: 'Not Found' }));
    }
  });
}

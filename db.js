const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.HOST, 
    user: process.env.USER,       
    password: process.env.PASSWORD,  
    database: process.env.DATABASE, 
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0
});

// Export the pool
module.exports = pool.promise(); // Export a promise-based API for easier async/await usage

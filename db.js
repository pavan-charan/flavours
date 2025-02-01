const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',  // Replace with your database host
    user: 'root',       // Your MySQL username
    password: 'Pavan@123',  // Your MySQL password
    database: 'projectdb', // Your MySQL database name
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0
});

// Export the pool
module.exports = pool.promise(); // Export a promise-based API for easier async/await usage

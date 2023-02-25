// Import and require mysql2
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'TakeTwo22$$',
        database: 'chart_db'
    },
    console.log(`Connected to the chart_db database.`)
);

/*
db.connection(function(error) {
    if(error) throw error;
});
*/

module.exports = db;
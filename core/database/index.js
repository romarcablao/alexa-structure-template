const mysql2 = require('mysql2');

var pool = mysql.createPool({
    host: process.env.dbhost,
    user: process.env.dbuser,
    password: process.env.dbpassword,
    database: process.env.dbname
});

// Queries/Functions
function getTasks() {
    let tasks = ''
    return tasks;
}

module.exports = {
    getTasks,
}
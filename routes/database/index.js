const mysql = require('mysql');

var connection = mysql.createPool({
    connectionLimit: 2,
    host: 'localhost',
    user: "root",
    password: "kohyunjun1",
    database: "chimihana",
    multipleStatements: true
});

module.exports = connection;
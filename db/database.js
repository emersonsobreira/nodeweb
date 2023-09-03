const mysql = require('mysql2')

const conn = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'testebd',
    password: '1234',
})

module.exports = conn.promise()
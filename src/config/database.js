const mysql = require('mysql2');
require('dotenv').config();

// test connection
// Create connection to database
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST, //muon dung process.env thi phai khai bao require('dotenv').config();
//     port: process.env.DB_PORT, //default: 3306
//     user: process.env.DB_USER, //default: empty
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE
// });

// Dùng Pool thay vì dùng Connection để cải thiện hiệu năng
const connection = mysql.createPool({
    host: process.env.DB_HOST, //muon dung process.env thi phai khai bao require('dotenv').config();
    port: process.env.DB_PORT, //default: 3306
    user: process.env.DB_USER, //default: empty
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Xuất connection
module.exports = connection;
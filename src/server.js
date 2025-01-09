require('dotenv').config();
const express = require('express');//common js
const path = require('path');//commonjs
const configViewEngine = require("./config/viewEngine");
const mysql = require('mysql2');

const webRoutes = require('./routes/web')

const app = express();//app express
const port = process.env.PORT || 8888; //Nếu server không chạy thì chạy cổng 1505 cho đỡ chết server
const hostname = process.env.HOST_NAME;

configViewEngine(app);//Config server

// Khai báo route, tham số đầu tiên tạo link cho các routes
app.use('/', webRoutes);
app.use('/v1', webRoutes);
app.use('/v2', webRoutes);

// Khai báo route với dữ liệu động (lựa chọn Ejs)

// test connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3307', //default: 3306
    user: 'root', //default: empty
    password: '123456',
    database: 'hoidanit'
});

connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log(">>>results= ", results);
        console.log(">>>fields= ", fields);
    }
);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
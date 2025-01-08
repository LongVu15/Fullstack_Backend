const express = require('express')//common js
const path = require('path')//commonjs
require('dotenv').config()

const app = express()//app express
const port = process.env.PORT || 8888; //Nếu server không chạy thì chạy cổng 1505 cho đỡ chết server
const hostname = process.env.HOST_NAME;

//Config template engine
app.set('views', path.join(__dirname, 'views'));//Tìm vào bên trong thư mục này (Nhớ khai báo const path)
app.set('view engine', 'ejs')

//Config static files
app.use(express.static(path.join(__dirname, 'public')))

//Khai báo route với dữ liệu tĩnh
app.get('/', (req, res) => {
    res.send('Hello World with Long Vu!')
})

app.get('/Shurima', (req, res) => {
    res.send('Azir')// Khai báo trang tĩnh
})

app.get('/Noxus', (req, res) => {
    // res.send('<h1 style="color: red"> Darius </h1>')
    res.render('sample.ejs')//express tự tìm file trong views
    //Khai báo trang động
})

// Khai báo route với dữ liệu động (lựa chọn Ejs)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
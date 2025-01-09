const path = require('path')//commonjs
const express = require('express')//common js
const configViewEngine = (app) => {
    //Config template engine
    // app.set('views', path.join(__dirname, 'views')); //Nếu khai báo thế này thì sẽ sai do đang đứng trong file config
    app.set('views', path.join('./src', 'views'));//Back ra ngoài folder src
    //Tìm vào bên trong thư mục này (Nhớ khai báo const path)
    app.set('view engine', 'ejs')

    //Config static files
    app.use(express.static(path.join('./src', 'public')))
}

module.exports = configViewEngine;

const getHomePage = (req, res) => {
    //process data
    //call model
    res.send('Hello World with Long Vu!')
}

const getShurima = (req, res) => {
    res.send('Azir')// Khai báo trang tĩnh
}

const getNoxus = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage, getShurima, getNoxus
}
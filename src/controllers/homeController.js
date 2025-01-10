const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('home.ejs')
}

const getShurima = (req, res) => {
    res.send('Azir')// Khai báo trang tĩnh
}

const getNoxus = (req, res) => {
    res.render('sample.ejs')
}

// const postCreateUser = (req, res) => {
//     let email = req.body.email;
//     let name = req.body.myname;
//     let city = req.body.city;

//     console.log(">>> req.body: ", 'Name: ', name, 'Email: ', email, 'City: ', city)
//     // let {name,email,city} = req.body;

//     connection.query(
//         `INSERT INTO Users (name, email, city) 
//         VALUES (?, ?, ?)`, //Dấu hỏi tức là lấy động
//         [name, email, city],
//         function (err, results) {
//             res.send('Create user succeed')
//         }
//     )
// }
const postCreateUser = (req, res) => {
    // Gỡ lỗi req.body
    console.log("Received req.body: ", req.body);

    // Phân rã đối tượng từ req.body
    const { email, myname: name, city } = req.body;

    // Kiểm tra dữ liệu đầu vào
    if (!email || !name || !city) {
        return res.status(400).send('Missing required fields');
    }

    console.log("Parsed values:", 'Name:', name, 'Email:', email, 'City:', city);

    // Thực thi câu lệnh SQL
    connection.query(
        `INSERT INTO Users (name, email, city) VALUES (?, ?, ?)`,
        [name, email, city],
        (err, results) => {
            if (err) {
                console.error('SQL error:', err);
                return res.status(500).send('Database error');
            }
            res.send('Create user succeed');
        }
    );
};

module.exports = {
    getHomePage, getShurima, getNoxus, postCreateUser
}
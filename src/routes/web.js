// Các methot, chức năng của website
const express = require('express');

const { getHomePage, getShurima, getNoxus } = require('../controllers/homeController');
//Tìm vào trong homeController

const router = express.Router();

// router.Method('/route'. handler)

//Khai báo route với dữ liệu tĩnh
// router.get('/', (req, res) => {
//     // Xu ly data
//     res.send('Hello World with Long Vu!')
// })

router.get('/', getHomePage);
router.get('/Shurima', getShurima);
router.get('/Noxus', getNoxus);
//Các hàm trong này không có dấu () ở cuối vì hàm không được thực thi trong file này, mà nó được tìm vào trong homeController

module.exports = router; //export default
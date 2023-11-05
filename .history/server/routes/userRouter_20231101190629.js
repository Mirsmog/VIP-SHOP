const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController');
const userController = require('../controllers/userController');

router.post('/registration',userController.registration(req, res));
router.post('/login');
router.get('/auth');

module.exports = router;

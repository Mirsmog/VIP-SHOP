const Router = require('express');
const router = new Router();
const brandRouter = require('./brandRouter');
const deviceRouter = require('./deviceRouter');
const userRouter = require('./userRouter');
const typeRouter = require('./typeRouter');

router.use('/user');
router.use('/type');
router.use('/brand');
router.use('/device');

module.exports = router;

const router = require('express').Router();
const user = require('../controllers/userController');

router.get('/signup', user.new);
router.post('/signup', user.create);
module.exports = router;
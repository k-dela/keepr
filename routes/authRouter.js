const router = require('express').Router();

// Controllers
const user = require('../controllers/userController');
const session = require('../controllers/sessionController');

router.get('/signup', user.new);
router.post('/signup', user.create);

router.get('/login', session.new);
router.post('/login', session.create);
module.exports = router;
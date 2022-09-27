const router = require('express').Router();

// Controllers
const user = require('../controllers/userController');
const session = require('../controllers/sessionController');

// Middlewares
const {checkForUser} = require('../middleware/auth');

router.use(checkForUser);

router.get('/signup', user.new);
router.post('/signup', user.create);

router.get('/login', session.new);
router.post('/login', session.create);
module.exports = router;
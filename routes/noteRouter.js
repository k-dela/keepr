const router = require('express').Router();


// Controllers
const note = require('../controllers/noteController');

// Middlewares
const {requireUser} = require('../middleware/auth');

router.use(requireUser);
router.get('/', note.index);

module.exports = router;
const { Login, Signup } = require('../controllers/admin');
const authMiddleware = require('../middleware/AuthMiddleware');

const router = require('express').Router();
router.post('/login', Login);
// Only superAdmin can access this route
router.post('/signup', authMiddleware('SUPER ADMIN'), Signup);
module.exports = router;

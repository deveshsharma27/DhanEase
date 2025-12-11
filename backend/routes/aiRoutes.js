const router = require('express').Router();
const { body } = require('express-validator');
const aiController = require('../controllers/aiController');
const auth = require('../middleware/authMiddleware');

router.post('/advice', auth, [
  body('question').isString().notEmpty()
], aiController.getAdvice);

module.exports = router;

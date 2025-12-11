const router = require('express').Router();
const { body } = require('express-validator');
const goalController = require('../controllers/goalController');
const auth = require('../middleware/authMiddleware');

router.use(auth);

router.post('/', [
  body('name').isString().notEmpty(),
  body('targetAmount').isNumeric()
], goalController.createGoal);

router.get('/', goalController.getGoals);
router.put('/:id', goalController.updateGoal);
router.delete('/:id', goalController.deleteGoal);

module.exports = router;

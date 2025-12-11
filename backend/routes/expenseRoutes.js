const router = require('express').Router();
const { body } = require('express-validator');
const expenseController = require('../controllers/expenseController');
const auth = require('../middleware/authMiddleware');

router.use(auth);

router.post('/', [
  body('amount').isNumeric(),
  body('category').isString().notEmpty()
], expenseController.createExpense);

router.get('/', expenseController.getExpenses);
router.get('/:id', expenseController.getExpense);
router.put('/:id', expenseController.updateExpense);
router.delete('/:id', expenseController.deleteExpense);

module.exports = router;

const { Router } = require("express");

const CustomerController = require('./CustomerController');

const router = Router();

router.get('/customers', async (req, res) => {
  const customers = await CustomerController.list();
  res.render('layout', { page: 'customers/customers-index', customers })
});

module.exports = router;